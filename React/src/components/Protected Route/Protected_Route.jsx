// ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, redirectPath = '/', children }) => {
  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to={redirectPath} replace />;
  }

  // Render the children or nested routes
  return children ? children : <Outlet />;
};

export default ProtectedRoute;