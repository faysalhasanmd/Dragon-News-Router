import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const AuthRoot = () => {
  return (
    <div className=" bg-base-200 min-h-screen">
      <header className="py-4 w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthRoot;
