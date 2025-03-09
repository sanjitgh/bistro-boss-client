import React from "react";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SslCommerz = () => {
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiousSecure = useAxiosSecure();

  const handleCreatePayment = async (e) => {
    e.preventDefault();
    // save payment info in database
    const paymentInfo = {
      transactionId: "",
      email: user?.email,
      price: totalPrice,
      date: new Date(),
      cartIds: cart.map((item) => item._id),
      menuItemIds: cart.map((item) => item.menuId),
      status: "Panding",
    };

    const response = await axiousSecure.post(
      "/create-ssl-payment",
      paymentInfo
    );

    console.log(response.data);

    if (response?.data?.gatewayUrl) {
      window.location.replace(response.data.gatewayUrl);
    }
  };
  
  return (
    <div className="max-w-screen-md mx-auto px-2 my-10">
      <form
        onSubmit={handleCreatePayment}
        className="text-center flex flex-col gap-5"
      >
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder={user?.email}
            readOnly
          />
        </label>
        <button type="submit" className="btn btn-neutral">
          Pay
        </button>
      </form>
    </div>
  );
};

export default SslCommerz;
