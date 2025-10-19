import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl">Login</h2>
      <div className="">
        <button className=" my-3 w-full btn btn-neutral btn-outline">
          <FcGoogle size={22} />
          Login With Google
        </button>
      </div>
      <div className="">
        <button className="btn  w-full btn-neutral btn-outline">
          <FaGithub size={22} /> Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
