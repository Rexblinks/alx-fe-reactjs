import React from "react";
import { Navigate } from "react-router-dom";

// Simple mock authentication hook
function useAuth() {
  // In real-world you’d check auth state from context or API
  const user = { loggedIn: true }; // change to false to simulate not logged in
  return user && user.loggedIn;
}

function ProtectedRoute({ children }) {
  const isAuth = useAuth();

  if (!isAuth) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
