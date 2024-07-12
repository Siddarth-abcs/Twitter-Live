import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth"; // Adjust import according to your setup
import { PageLoding } from "./PageLoding";

export const ProtectedRoute = ({ children }) => {
  const auth = getAuth(); // Ensure auth is initialized here
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <PageLoding />;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
