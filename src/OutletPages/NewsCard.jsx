import React from "react";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import News from "../Pages/News";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";

const NewsCard = ({ card }) => {
  const formateDate = new Date(card.author.published_date).toLocaleDateString();

  return (
    <div className="card w-full bg-base-100 shadow-xl border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/100" alt="Author" />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">{card.author.name}</h2>
            <p className="text-sm text-gray-500">{formateDate}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <CiBookmark />
          <FiShare2 className="text-gray-600 text-lg cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 mt-3">
        <h2 className="text-lg font-bold leading-snug hover:text-primary cursor-pointer">
          {card.title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img src={card.image_url} alt="News" className="rounded-xl" />
      </figure>

      {/* Description */}
      <div className="px-4 py-3">
        <p className="text-sm text-gray-500 leading-relaxed">
          {card.details.length > 200 ? (
            <>
              {card.details.slice(0, 200)}.
              <Link
                to={`/news-details/${card.id}`}
                className="text-red-500 hover:underline cursor-pointer"
              >
                see more...
              </Link>
            </>
          ) : (
            card.details
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 border-t border-gray-100 pt-3">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700 font-semibold text-sm">
            {card.rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span className="text-sm">499</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
