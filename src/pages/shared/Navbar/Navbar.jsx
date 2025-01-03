import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provaiders/AuthProvaider";
import { PiShoppingCartSimple } from "react-icons/pi";
import useCart from "../../../hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const links = (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/menu"}>Menu</Link>
      <Link to={"/our-shop/all"}>Our Shop</Link>
      <Link to={"/secret"}>Secret</Link>
      {user ? (
        <button onClick={() => logOut()} className="btn btn-sm">
          Logout
        </button>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
    </>
  );
  return (
    <header className="z-[9999999] bg-[#00000060] text-white fixed w-full">
      <div className="navbar md:px-10 px-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BistroBoss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu items-center gap-5 menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/dashboard/cart'} className="relative ">
            <PiShoppingCartSimple className="text-4xl" />
            <div className="rounded-full absolute -bottom-2 -right-3 text-[10px] bg-red-600 p-1">
              <div className="w-3 h-3 flex justify-center items-center">
                {cart?.length}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
