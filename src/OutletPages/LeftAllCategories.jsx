import React, { use } from "react";
import { NavLink } from "react-router";

const resCategories = fetch("/categories.json").then((res) => res.json());
const LeftAllCategories = () => {
  const fetchData = use(resCategories);
  return (
    <div>
      <h2 className="font-bold">All Categories</h2>
      <div>
        <div className="grid grid-cols-1 mt-5">
          {fetchData.map((categorieData) => (
            <NavLink
              className="btn bg-white border-0 text-gray-500 hover:bg-base-300"
              key={categorieData.id}
              to={`/categories/${categorieData.id}`}
            >
              {categorieData.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftAllCategories;
