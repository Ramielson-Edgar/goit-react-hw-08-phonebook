import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../Redux';

import s from '../Navigations/Naviagtion.module.css';

const Navigation = ({ isAuthenticated }) => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.listItem}>
          <NavLink
            exact
            to="/"
            className={s.navigationlink}
            activeClassName={s.navigationLinkActive}
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li className={s.listItem}>
            <NavLink
              to="/contacts"
              className={s.navigationlink}
              activeClassName={s.navigationLinkActive}
            >
              contacts
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
