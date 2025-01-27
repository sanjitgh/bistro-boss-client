import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaMoneyBill, FaUsers } from "react-icons/fa";
import { MdLocalShipping, MdProductionQuantityLimits } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });
  console.log(chartData);

  // custom shape for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // pie chart

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data._id, value: data.revinue };
  });

  return (
    <>
      <Helmet>
        <title>Admin Home | Dashboard</title>
      </Helmet>
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
        <div className="flex gap-5 justify-between mt-10">
          <div className="w-1/2">
            <BarChart
              width={800}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="w-1/2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend></Legend>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
