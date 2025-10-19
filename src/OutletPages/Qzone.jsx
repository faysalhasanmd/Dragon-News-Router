import React from "react";
import swimming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import play from "../assets/playground.png";

const Qzone = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Qzone</h1>
      <div className="space-y-3.5">
        <img src={swimming} alt="" />
        <img src={classImg} alt="" />
        <img src={play} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
