import React, { useState } from 'react'
import axios from 'axios';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import {CardElement} from '@stripe/react-stripe-js';


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}


export default function PaymentFrom() {
    
    const[success, setSucces] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

    if(!error){
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 1000,
                id
            })

            if(response.data.success){
                console.log("Sucesso")
                setSucces(true)
            }
        } catch (error){
            console.log("Error", error)
        }
    }else{
        console.log(error.message)
    }
    }

    return(
        <div>

            {!success ?
            <from onSubmit={handleSubmit}>
                    <fieldset className="FromGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS}/>
                        </div>
                    </fieldset>
                <button>Pagar</button>
            </from>
        
        :
            <div>
                <h2>Parabens pela compra!</h2>
            </div>

        }   
        </div>
    );
};