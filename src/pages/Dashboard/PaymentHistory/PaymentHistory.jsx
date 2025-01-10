import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SecitonTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { format } from "date-fns";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  console.log(payments);

  return (
    <>
      <Helmet>
        <title>Payment History - Dashboard</title>
      </Helmet>
      <div className="py-10">
        <SectionTitle
          subTitle={"---At a Glance!---"}
          title={"PAYMENT HISTORY"}
        ></SectionTitle>
        <div className="bg-white px-5 py-14">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-2xl font-bold">
              Total Payment : {payments.length}
            </h1>
          </div>
          <div className="overflow-x-auto max-h-96 relative">
            <table className="table">
              {/* head */}
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#D1A054] text-white">
                  <th>Serial</th>
                  <th>Email</th>
                  <th>Total Price</th>
                  <th>Transaction Id</th>
                  <th>Paymetn Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="max-h-80">
                {payments.map((item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.email}</td>
                    <td>${item.price}</td>
                    <td>${item.transactionId}</td>
                    <td>{format(new Date(item.date), "EEEE PP")}</td>
                    <td>
                      <button className="bg-orange-300 p-1 rounded">{item.status}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
