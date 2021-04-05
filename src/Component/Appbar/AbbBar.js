import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigations';
import AuthNav from '../AuthNav';
import UserMenu from '../../UserMenu/UserMenu';
import authSelectors from '../../Redux/auth/auth-selectors';
import s from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => {
  console.log(isAuthenticated);
  return (
    <header className={s.barContaienr}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

AppBar.propTypes = {};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
