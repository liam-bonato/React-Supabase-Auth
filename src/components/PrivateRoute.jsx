import React from "react";
import { UserAuth} from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { session } = UserAuth();

  if (session === undefined) {
    // Optionally, you can return a loading state here
    return <p>Loading...</p>;
  }

  return <>{session ? <>{children}</> : <Navigate to="/signin" />}</>;
}

export default PrivateRoute;