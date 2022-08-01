import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage({});

  const loginUser = (accessToken, email, id) => {
    setAuth({ accessToken, email, _id: id });
  };

  const logoutUser = () => {
    setAuth({});
  };

  const isAuthenticated = !!auth?.accessToken;

  return (
    <AuthContext.Provider
      value={{ user: auth, isAuthenticated, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
