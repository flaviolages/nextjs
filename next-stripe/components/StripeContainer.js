import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51HkuNxK8YyuBJb1gYVUCrBKkbO203Iq2CJzZTv0k0iWGoM0MEldjTbPbNI3S4h53pXQ1oFiQLY6Jk1wQbXcTv4z600qD1kJKiZ ";

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return(
        <div>
            <Elements stripe={stripeTestPromise}>

                <PaymentForm />

            </Elements>
            

        </div>
    );
};