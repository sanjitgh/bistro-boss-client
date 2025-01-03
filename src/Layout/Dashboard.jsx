import { FaCalendar, FaHome, FaOpencart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoStarHalf } from "react-icons/io5";
import { TbBrandBooking } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";


const Dashboard = () => {
  return (
    <div className="flex bg-gray-100">
      {/* sidebar */}
      <div className="w-72 min-h-screen p-5 bg-[#D1A054]">
        <h1 className="text-4xl ">Dashboard</h1>
        <div className="divider"></div>
        <ul className="flex flex-col gap-4 font-medium uppercase">
          <li className="flex items-center gap-2">
            <FaHome></FaHome>
            <NavLink
              to={"/dashboard/userHome"}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : ""
              }
            >
              User Home
            </NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaCalendar></FaCalendar>
            <NavLink to={"/dashboard/reservation"}>Reservation</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <IoStarHalf />
            <NavLink to={"/dashboard/reviews"}>add review</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaOpencart />
            <NavLink to={"/dashboard/cart"}>My Cart</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <TbBrandBooking />
            <NavLink to={"/dashboard/bookings"}>My booking</NavLink>
          </li>
          <div className="divider"></div>
          <li className="flex items-center gap-2">
            <FaHome></FaHome>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="flex items-center gap-2">
          <RxHamburgerMenu />
            <NavLink to={"/our-shop/all"}>Menu</NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard main content */}
      <div className="w-full min-h-screen flex-grow py-5 px-5 md:px-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
