import Stripe from 'stripe';
const stripe = new Stripe("sk_test_51HkuNxK8YyuBJb1gPDa8g2t13kKtW6m5vwZQIPL5jurw5vA2YbaKIdfezOrgT01tSCHyCdOUEP1U7hoP77KcHeI500pwhVGykU");


export default async (req, res) => {
    const { id, amount } = req.body;
    
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'BRL',
            description: "Pagamenteo site",
            payment_method: id,
            confirm: true
        });
        
        console.log(payment);

        return res.status(200).json({
            confirm: "abc123"
        });
    }catch(error) {}
};