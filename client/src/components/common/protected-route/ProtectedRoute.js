import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

export const ProtectedRoute = ({ onlyUser }) => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);

  if ((onlyUser && !isAuthenticated) || (!onlyUser && isAuthenticated)) {
    return <Navigate to={'/'} replace />;
  }

  return <Outlet />;
};
