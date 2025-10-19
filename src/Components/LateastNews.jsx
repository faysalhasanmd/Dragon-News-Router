import React from "react";
import Marquee from "react-fast-marquee";

const LateastNews = () => {
  return (
    <div className="mx-auto flex gap-2 w-full items-center bg-base-300 p-3 rounded-[7px] my-4">
      <p className="bg-secondary text-white p-3">Latest</p>
      <Marquee pauseOnHover={true} className="mouse-pointer">
        <p className="p-3 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          laudantium.
        </p>
        <p className="p-3 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          laudantium.
        </p>
        <p className="p-3 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          laudantium.
        </p>
      </Marquee>
    </div>
  );
};

export default LateastNews;
