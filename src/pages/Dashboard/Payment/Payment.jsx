import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SecitonTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";
import SslCommerz from "./sslCommerz";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = () => {
  const [item, setItem] = useState("Stripe");
  const handleSelect = (i) => {
    setItem(i);
  };
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
        <div className="flex justify-center">
          <select
            onChange={(e) => handleSelect(e.target.value)}
            className="select select-bordered w-56"
          >
            <option>Stripe</option>
            <option>SLLCommarz</option>
          </select>
        </div>
        {item === "Stripe" ? (
          <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
          </Elements>
        ) : (
          <SslCommerz></SslCommerz>
        )}
        {/*  */}
      </div>
    </>
  );
};

export default Payment;
