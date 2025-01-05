import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }),
    function (errrr) {
      return Promise.reject(errrr);
    };
 // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async(error) => {
      const status = error.response.status;
      // for 401 or 403 logout the user and move the user login page
      if (status === 401 || status === 403) {
        navigate("/login");
        await logOut();
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
