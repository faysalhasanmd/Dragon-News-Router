import React from "react";
import { Link, NavLink } from "react-router";
import user from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../Firebase/AuthProvider";

const Navbar = () => {
  const { userInfo, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("logOut successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-between ">
      <div>{userInfo && userInfo.email}</div>
      <div className="flex gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3 items-center">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={userInfo ? userInfo.photoURL : user}
          alt=""
        />
        {userInfo ? (
          <button onClick={handleLogOut} className="btn-primary btn">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="btn-primary btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
