import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { authSelectors, authOperation } from '../Redux';
import defaulAvatar from './user-avatar/UserAvatar.jpg';
import s from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogOut }) => {
  return (
    <div className={s.container}>
      <div className={s.inner}>
        <img className={s.avatar} src={avatar} alt="" />
      </div>
      <h3>Welcome</h3> <p>{name}</p>
      <button className={s.bnt} type="button" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
};

UserMenu.propTypes = {};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaulAvatar,
});

const mapDispatchToProps = {
  onLogOut: authOperation.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
