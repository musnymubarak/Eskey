import { useState } from 'react';

const dummyUser = {
  email: 'user@example.com',
  password: '123456',
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const login = (email: string, password: string) => {
    if (email === dummyUser.email && password === dummyUser.password) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setIsAuthenticated(false);
      setError('Invalid email or password');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout, error };
};
