import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperation } from '../../Redux';
import s from '../RegistredViews/RegistredViews.module.css';

class RegistredViews extends Component {
  state = {
    name: '',
    email: ' ',
    password: '',
  };

  HandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);
    this.setState({ name: '', email: ' ', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <div className={s.wrapper}>
          <div className={s.inputContainer}>
            <h1 className={s.headline}>Registering</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                className={s.inputName}
                name="name"
                type="name"
                placeholder="name..."
                value={name}
                onChange={this.HandleChange}
                autoComplete="off"
                maxLength={15}
                required
              />

              <input
                className={s.inputEmail}
                type="email"
                name="email"
                placeholder="email..."
                value={email}
                onChange={this.HandleChange}
                autoComplete="off"
                maxLength={20}
                required
              />

              <input
                className={s.inputPassword}
                type="password"
                name="password"
                placeholder="password..."
                value={password}
                onChange={this.HandleChange}
                autoComplete="off"
                maxLength={15}
                required
              />

              <button className={s.btn} type="submit">
                Registration
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

RegistredViews.propTypes = {};

const mapDispatchToProps = {
  onRegister: authOperation.register,
};

export default connect(null, mapDispatchToProps)(RegistredViews);
