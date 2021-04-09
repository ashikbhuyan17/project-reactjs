import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie2LXGRZTsNBqteqp3vYZDFCgdpDvqKHsUkosb2ETsYxQW5uzXroOco4Z9uf8ttW6E0HDW4MdTCMCJQdNzwEOdA00pvJbs7Dx');



const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            {/* <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            /> */}
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;
