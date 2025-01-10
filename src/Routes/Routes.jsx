import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Secret from "../pages/shared/Secret/Secret";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/our-shop/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/secret",
        element: (
          <PrivetRoute>
            <Secret></Secret>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      // normal user routes
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "dashboard/payment-history",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "dashboard/userhome",
        element: <UserHome></UserHome>
      },

      // admin routes
      {
        path: "/dashboard/alluser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/additem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageitem",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adminhome",
        element: (
          <AdminRoute>
           <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateitem/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params?.id}`),
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);
