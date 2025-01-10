import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();

  const handleGoogleLogin = () => {
    googleSignIn().then((res) => {
      const userInfo = {
        name: res.user.displayName,
        email: res.user.email,
      };
      axiosPublic.post("/users", userInfo)
      .then((res) => {
        // console.log(res.data);
      });
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login Successfull.",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from);
    });
  };

  return (
    <div>
      <div className="divider mt-0"></div>
      <div>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn btn-block bg-yellow-700 text-white hover:bg-yellow-700"
        >
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
