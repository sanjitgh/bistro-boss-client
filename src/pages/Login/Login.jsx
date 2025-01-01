import { useContext, useEffect, useRef, useState } from "react";
import img2 from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provaiders/AuthProvaider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
        .then(result => {
            console.log(result.user);
        })
  };

  const handleValidCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>BistroBoss - Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2">
          <div className="text-center lg:text-left flex-1">
            <img src={img2} alt="Authentication Illustration" />
          </div>
          <div className="card flex-1 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  name="captcha"
                  ref={captchaRef}
                  type="text"
                  placeholder="Type the above characters here"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidCaptcha}
                  type="button"
                  className="btn btn-xs btn-block btn-outline mt-5"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disable}
                  type="submit"
                  value={"Login"}
                  className="btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
