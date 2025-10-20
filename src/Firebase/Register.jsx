import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const [nameError, setNameError] = useState("");
  const { createUser, setUserInfo, updateUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    {
      if (name.length < 5) {
        setNameError("Name should be more then 5 character");
        return;
      } else {
        setNameError("");
      }
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(form, name, photo, email, password);
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUserInfo({ ...user, displayName: name, photoURL: photo });
            console.log(user);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUserInfo(user);
          });
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse"></div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-4xl text-center font-bold mt-3">Register now!</h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
            />
            <p className="text-red-500">{nameError}</p>
            {/* url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div></div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
          <p>
            Already Have an account ?{" "}
            <Link to="/auth/login" className="text-orange-700 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
