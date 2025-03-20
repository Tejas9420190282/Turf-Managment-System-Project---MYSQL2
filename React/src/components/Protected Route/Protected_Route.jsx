import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function Protected_Route({ isAuthenticated, redirectPath = "/" }) {
    const location = useLocation();

    useEffect(() => {
        // Re-check authentication status whenever the route changes
        if (!isAuthenticated) {
            console.log("User is not authenticated. Redirecting to login...");
        }
    }, [location, isAuthenticated]);

    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }

    // If the user is authenticated, render the child routes
    return <Outlet />;
}

export default Protected_Route;