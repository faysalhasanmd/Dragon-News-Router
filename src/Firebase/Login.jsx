import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const { logIn } = use(AuthContext);
  const logInHandler = (e) => {
    e.preventDefault();
    const mainDiv = e.target;
    const email = e.target.email.value;
    const pass = e.target.password.value;
    // console.log(mainDiv, email, pass);
    logIn(email, pass)
      .then(() => {
        alert("Logged In User");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const err = error.code;
        setError(err);
      });
  };
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse"></div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-4xl text-center font-bold mt-3">Login now!</h1>
        <div className="card-body">
          <form onSubmit={logInHandler}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <p className="text-red-500">{error}</p>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
          </form>
          <p>
            Don't Have an account ?{" "}
            <Link
              to="/auth/register"
              className="text-orange-700 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
