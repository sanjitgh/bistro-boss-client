import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaMoneyBill, FaUsers } from "react-icons/fa";
import { MdLocalShipping, MdProductionQuantityLimits } from "react-icons/md";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(stats);
  return (
    <div className="py-14">
      <h1 className="text-2xl font-semibold mb-8">
        Hi Welcome {user.displayName ? user.displayName : "Back"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div className="stat py-8 bg-purple-500 rounded-lg">
          <div className="stat-value text-white ">{stats?.revenue}$</div>
          <div className="stat-title text-white">Revenue</div>
          <div className="stat-figure ">
            <FaMoneyBill className="text-4xl text-white"></FaMoneyBill>
          </div>
        </div>
        <div className="stat py-8 bg-yellow-400 rounded-lg">
          <div className="stat-value text-white ">{stats?.users}</div>
          <div className="stat-title text-white">Customars</div>
          <div className="stat-figure ">
            <FaUsers className="text-4xl text-white"></FaUsers>
          </div>
        </div>
        <div className="stat py-8 bg-blue-400 rounded-lg">
          <div className="stat-value text-white ">{stats?.menuItems}</div>
          <div className="stat-title text-white">Products</div>
          <div className="stat-figure ">
            <MdProductionQuantityLimits className="text-4xl text-white" />
          </div>
        </div>
        <div className="stat py-8 bg-fuchsia-400 rounded-lg">
          <div className="stat-value text-white ">{stats?.orders}</div>
          <div className="stat-title text-white">Orders</div>
          <div className="stat-figure ">
            <MdLocalShipping className="text-4xl text-white"></MdLocalShipping>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
