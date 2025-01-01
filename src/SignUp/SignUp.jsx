import { Helmet } from "react-helmet-async";
import img2 from "../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../provaiders/AuthProvaider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(res => {
      console.log(res.user);
    })
  };

  return (
    <>
      <Helmet>
        <title>BistroBoss - SignUp</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2">
          <div className="card flex-1 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500 mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                      message:
                        "Password must include uppercase, lowercase, number, and special character",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-500 mt-2">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input type="submit" value={"Sign Up"} className="btn " />
              </div>
              <div className="form-control mt-6">
                <p>
                  You have an account ?{" "}
                  <Link to={"/login"} className="link">
                    <b>Login</b>
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left flex-1">
            <img src={img2} alt="Authentication Illustration" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
