import React, { use } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { Navigate, useLocation } from "react-router";
import { ClimbingBoxLoader, SyncLoader } from "react-spinners";
import Loading from "../Pages/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // console.log(location);

  const { userInfo, loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (userInfo && userInfo?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
