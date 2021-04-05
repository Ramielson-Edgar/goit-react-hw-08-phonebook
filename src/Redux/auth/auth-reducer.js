import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './auth-actions';

const initialState = { name: '', email: '', password: '' };

const user = createReducer(initialState, {
  [actions.registrationSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logOutSuccess]: () => initialState,
  [actions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [actions.registrationSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logOutSuccess]: () => null,
});

const error = createReducer(null, {
  [actions.registrationError]: (_, { payload }) => payload,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.logOutError]: (_, { payload }) => payload,
  [actions.getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [actions.registrationSuccess]: () => true,
  [actions.loginSuccess]: () => true,
  [actions.getCurrentUserSuccess]: () => true,
  [actions.logOutSuccess]: () => false,

  [actions.registrationError]: () => false,
  [actions.loginError]: () => false,
  [actions.logOutError]: () => false,
  [actions.getCurrentUserError]: () => false,
});

const loading = createReducer(false, {
  [actions.registrationRequest]: () => true,
  [actions.registrationSuccess]: () => false,
  [actions.registrationError]: () => false,

  [actions.loginRequest]: () => true,
  [actions.loginSuccess]: () => false,
  [actions.loginError]: () => false,

  [actions.logOutRequest]: () => true,
  [actions.logOutSuccess]: () => false,
  [actions.logOutError]: () => false,

  [actions.getCurrentUserRequest]: () => true,
  [actions.getCurrentUserSuccess]: () => false,
  [actions.getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
  loading,
});
