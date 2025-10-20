import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SyncLoader />
    </div>
  );
};

export default Loading;
