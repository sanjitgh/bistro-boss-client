import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SecitonTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = () => {
  return (
    <>
      <Helmet>
        <title>Payment || Dashboard</title>
      </Helmet>
      <div className="py-14">
        <SectionTitle
          subTitle={"---Please Pay First---"}
          title={"Payment"}
        ></SectionTitle>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </>
  );
};

export default Payment;
