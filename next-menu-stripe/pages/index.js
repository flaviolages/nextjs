import Head from 'next/head';
import Layout from '../components/Layout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';



//INICIAR STRIPE
const stripePromise = loadStripe("pk_test_51HkuNxK8YyuBJb1gYVUCrBKkbO203Iq2CJzZTv0k0iWGoM0MEldjTbPbNI3S4h53pXQ1oFiQLY6Jk1wQbXcTv4z600qD1kJKiZ");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async(event) => {
    event.preventDefault();

    const {error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if(!error){
      const {id} = paymentMethod;
      
      try {
        const response = await axios.post("/api/charge", {id, amount: 11099 });
        //console.log(data);
      } catch (error){
        console.log(error);
      }
    }


  }

  return( 
    <form onSubmit={handleSubmit}>
      <CardElement>
      </CardElement>

      <button type="submit" disabled={!stripe}>
        Pagar
      </button>
    </form>
  );
};



export default function Home() {
  return (
    <div className="bg-color1 h-screen">
      <Head>
        <title>Menu</title>
        <meta name="description" content="Clean" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />

        <div className="mx-auto w-3/4 bg-red-500 h-screen mt-8">
            
                    <Elements stripe={stripePromise}>
                      <CheckoutForm/>
                    </Elements>

        </div>



  </div>
  )
}
