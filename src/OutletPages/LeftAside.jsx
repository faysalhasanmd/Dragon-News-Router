import React, { Suspense } from "react";
import LeftAllCategories from "./LeftAllCategories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-dots loading-lg"></span>}
      >
        <LeftAllCategories></LeftAllCategories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
