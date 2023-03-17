import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import NavBar from 'components/NavBar/NavBar';
import UserRoutes from './UserRoutes';

import { current } from 'Redux/auth/auth-operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <BrowserRouter basename="/react-template-test">
      <NavBar />
      <UserRoutes />
    </BrowserRouter>
  );
}
