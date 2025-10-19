import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between ">
      <div></div>
      <div className="flex gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3 items-center">
        <img src={user} alt="" />
        <button className="btn-primary btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
