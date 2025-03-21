
// useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (e.g., by checking localStorage)
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
};

export default useAuth;