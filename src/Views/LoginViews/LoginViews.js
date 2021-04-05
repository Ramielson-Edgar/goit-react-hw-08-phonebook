import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperation } from '../../Redux';
import s from '../LoginViews/LoginViews.module.css';
// import PropTypes from 'prop-types';

class LoginViews extends Component {
  state = {
    email: '',
    password: '',
  };

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onHadleChange = e => {
    e.preventDefault();

    this.props.onLogin(this.state);
    this.setState({ email: ' ', password: '' });
  };
  render() {
    const { password, email } = this.state;
    return (
      <div className={s.wrapper}>
        <div className={s.inputContainer}>
          <h1 className={s.headline}>Log in</h1>
          <form onSubmit={this.onHadleChange}>
            <input
              className={s.inputName}
              name="email"
              type="email"
              placeholder="email..."
              value={email}
              onChange={this.onHandleChange}
              autoComplete="off"
              maxLength={20}
              required
            />
            <input
              className={s.inputNumber}
              name="password"
              type="password"
              placeholder="password..."
              value={password}
              onChange={this.onHandleChange}
              autoComplete="off"
              maxLength={15}
              required
            />

            <button className={s.btn} type="submit">
              log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

LoginViews.propTypes = {};

const mapDispatchToProps = {
  onLogin: authOperation.login,
};

export default connect(null, mapDispatchToProps)(LoginViews);
