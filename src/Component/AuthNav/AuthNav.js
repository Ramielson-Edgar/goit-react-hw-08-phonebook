import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../AuthNav/AuthNav.module.css';
// import PropTypes from 'prop-types';

const AuthNav = props => {
  return (
    <>
      <ul className={s.authNav}>
        <li className={s.listItem}>
          <NavLink
            exact
            to="/login"
            className={s.navigationlink}
            activeClassName={s.navigationLinkActive}
          >
            login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={s.navigationlink}
            activeClassName={s.navigationLinkActive}
          >
            register
          </NavLink>
        </li>
      </ul>
    </>
  );
};

AuthNav.propTypes = {};

export default AuthNav;
