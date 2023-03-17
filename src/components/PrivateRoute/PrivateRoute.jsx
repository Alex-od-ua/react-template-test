import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { isUserLogin } from 'Redux/auth/auth-selectors';
import { getAuth } from 'Redux/auth/auth-selectors';

import Loader from 'shared/components/Loader/Loader';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
