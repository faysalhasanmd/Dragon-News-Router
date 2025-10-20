import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ newsData }) => {
  return (
    <div className="space-y-4">
      <img
        className="object-cover w-full h-[355px] rounded-[7px]"
        src={newsData.image_url}
        alt=""
      />
      <h2 className="text-[20px] font-semibold">{newsData.title}</h2>
      <p>{newsData.details}</p>
      <Link
        to={`/categories/${newsData.category_id}`}
        className="btn bg-pink-600 text-white"
      >
        <FaArrowLeft /> Go Back
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
