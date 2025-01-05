import {
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaOpencart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoStarHalf } from "react-icons/io5";
import { TbBrandBooking } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineManageSearch } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex bg-gray-100">
      {/* sidebar */}
      <div className="w-72 min-h-screen p-5 bg-[#D1A054]">
        <h1 className="text-4xl ">Dashboard</h1>
        <div className="divider"></div>
        <ul className="flex flex-col gap-4 font-medium uppercase">
          {isAdmin ? (
            <>
              <li className="flex items-center gap-2">
                <NavLink
                  to={"/dashboard/adminHome"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-3"
                      : "flex items-center gap-3"
                  }
                >
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-3"
                      : "flex items-center gap-3"
                  }
                  to={"/dashboard/additem"}
                >
                  <GiForkKnifeSpoon />
                  add Item
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-3"
                      : "flex items-center gap-3"
                  }
                  to={"/dashboard/manageitem"}
                >
                  <MdOutlineManageSearch />
                  manage item
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-3"
                      : "flex items-center gap-3"
                  }
                  to={"/dashboard/managebooking"}
                >
                  <FaBook></FaBook>
                  manage booking
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white flex items-center gap-3"
                      : "flex items-center gap-3"
                  }
                  to={"/dashboard/alluser"}
                >
                  <HiMiniUserGroup />
                  all user
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}

          {/* shared link for all */}
          <div className="divider"></div>
          <li className="flex items-center gap-2">
            <FaHome></FaHome>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <RxHamburgerMenu />
            <NavLink to={"/our-shop/all"}>Menu</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope></FaEnvelope>
            <NavLink to={"/our-shop/contact"}>Contact</NavLink>
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
