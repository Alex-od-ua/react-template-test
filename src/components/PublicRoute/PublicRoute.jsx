import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { isUserLogin } from 'Redux/auth/auth-selectors';
import { getAuth } from 'Redux/auth/auth-selectors';

import Loader from 'shared/components/Loader/Loader';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
