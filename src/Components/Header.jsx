import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col text-center">
      <img className="w-[400px] mx-auto" src={logo} alt="" />
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      <p className="text-accent font-semibold">
        {format(new Date(), "EEEE , MMMM dd , yyyy")}
      </p>
    </div>
  );
};

export default Header;
