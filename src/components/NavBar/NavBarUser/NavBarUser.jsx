import { useSelector, useDispatch } from 'react-redux';

import { getUserName } from 'Redux/auth/auth-selectors';
import { logout } from 'Redux/auth/auth-operations';

import Button from '@mui/material/Button';
import css from './NavBarUser.module.css';

const NavBarUser = () => {
  const { name, email } = useSelector(getUserName);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.info}>
      {name}, {email}{' '}
      <Button variant="contained" onClick={onLogout}>
        {' '}
        Logout
      </Button>
    </div>
  );
};

export default NavBarUser;
