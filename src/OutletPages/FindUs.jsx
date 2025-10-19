import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const FindUs = () => {
  return (
    <div className="mt-2">
      <h1 className="text-2xl font-bold">Find Us On</h1>
      <div>
        <div className="join w-full bg-base-100 join-vertical mt-4">
          <button className="btn join-item bg-base-100 justify-start">
            <FaFacebook />
            Facebook
          </button>
          <button className="btn join-item bg-base-100 justify-start">
            <AiFillTwitterCircle />
            Twitter
          </button>
          <button className="btn join-item bg-base-100 justify-start">
            <FiInstagram />
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
