import { FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SecitonTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiousSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiousSecure.delete(`carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>All User || Dashboard</title>
      </Helmet>
      <div className="py-10">
        <SectionTitle subTitle={"---My Cart---"} title="WANNA ADD MORE?" />
        <div className="bg-white px-5 py-14">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-2xl font-bold">Total Order : {cart.length}</h1>
            <h1 className="text-2xl font-bold">Total Price : $ {totalPrice}</h1>
            {cart.length > 0 ? (
              <Link to={"/dashboard/payment"}>
                <button className="btn">Pay</button>
              </Link>
            ) : (
              <button disabled className="btn">
                Pay
              </button>
            )}
          </div>
          <div className="overflow-x-auto max-h-96 relative">
            <table className="table">
              {/* head */}
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#D1A054] text-white">
                  <th>Serial</th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="max-h-80">
                {cart.length > 0 ? (
                  <>
                    {cart.map((item, idx) => (
                      <tr key={item._id}>
                        <td>{idx + 1}</td>
                        <td>
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={item.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="bg-red-500 text-white text-lg p-2 rounded"
                          >
                            <FaRegTrashAlt />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr><td className="text-center font-bold text-2xl" colSpan={5}>No Cart Available</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
