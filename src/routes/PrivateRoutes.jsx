import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
//   console.log(location);
  if (loading) {
    return (
      <>
        <LoadingSpinner></LoadingSpinner>
      </>
    );
  }
  if (user) {
    // console.log(user)
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;