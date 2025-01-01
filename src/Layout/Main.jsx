import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <>
      {noHeaderFooter || <Navbar></Navbar>}
      <main>
        <Outlet></Outlet>
      </main>
      {noHeaderFooter || <Footer></Footer>}
    </>
  );
};

export default Main;
