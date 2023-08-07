// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  useEffect(() => {
    if (token) {
      const fetchUser = async () => {
        try {
          const res = await axios.get('http://localhost:3000/api/user', { headers: { 'auth-token': token } });
          setUser(res.data);
        } catch (err) {
          console.error(err);
        }
      };

      fetchUser();
    }
  }, [token]);

  const value = {
    token,
    setToken,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
