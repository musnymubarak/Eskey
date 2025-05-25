import { useState } from 'react';

let loggedIn = false;

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(loggedIn);

  const login = () => {
    loggedIn = true;
    setIsAuthenticated(true);
  };

  const logout = () => {
    loggedIn = false;
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};
