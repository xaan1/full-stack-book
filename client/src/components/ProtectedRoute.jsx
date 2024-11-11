
import React, { Fragment } from 'react'
import { Navigate, useLocation } from 'react-router';

function ProtectedRoute({ authenticated, user, element }) {

  

    const location = useLocation();

  
    console.log(user?.role, "user.role");
    console.log(authenticated, "location.authenticated");
  
  
  
    if (!authenticated && !location.pathname.includes("/auth")) {
      return <Navigate to="/auth" />;
    }
  
  
  
  
    if (
      authenticated &&
      user?.role !== "instructor" &&
      (location.pathname.includes("instructor") ||
        location.pathname.includes("auth"))
    ) {
      return <Navigate to="/home" />;
    }
  
  
    
    if (
      authenticated &&
      user?.role === "instructor" &&
      !location.pathname.includes("instructor")
    ) {
      return <Navigate to="/instructor" />;
    }
  
    return <Fragment>{element}</Fragment>;
   
  }

export default ProtectedRoute