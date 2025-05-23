import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../../services/store';

type TProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: ReactNode;
};

export const ProtectedRoute: FC<TProtectedRouteProps> = ({ onlyUnAuth = false, children }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const location = useLocation();

  if (onlyUnAuth && user) {
    // Пользователь авторизован, но маршрут только для неавторизованных
    const from = location.state?.from || '/';
    return <Navigate to={from} replace />;
  }

  if (!onlyUnAuth && !user) {
    // Пользователь неавторизован, но маршрут защищён
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Все проверки пройдены
  return children;
};