import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';

const stripePromise = loadStripe('pk_test_51IiCeaDkwZWNwMvHE4MKMWQbfjfeKD2P4L8ytXZhMn5whOQuSC09JGEigYw7Uzw6oRVN0W29ioMkDzwTu5Gk0IsK00VsSuITi6');
const Payment = () => {

    return (
        
    <Elements stripe={stripePromise}>
      <PaymentForm></PaymentForm>
    </Elements>
       
    );
};

export default Payment;