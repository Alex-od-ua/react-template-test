import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';

import { isUserLogin } from 'Redux/auth/auth-selectors';

import NavBarAuth from './NavBarAuth/NavBarAuth';
import NavBarUser from './NavBarUser/NavBarUser';

import items from './item';

import css from './NavBar.module.css';

// const getFullName = ({ isActive }) => {
//     return isActive ? `${css.link} ${css.active}` : css.link;
// }

const NavBar = () => {
  const isLogin = useSelector(isUserLogin);

  const filteredItems = !isLogin ? items.filter(item => !item.private) : items; //hidden links with - privat: true (on logout)

  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={css.navbar}>
      <Container maxWidth="xl">
        <div className={css.navbar_items}>
          <ul className={css.menu}>{elements}</ul>
          <div className={css.navbar_auth}>
            {!isLogin && <NavBarAuth />}
            {isLogin && <NavBarUser />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
