import { createAction } from '@reduxjs/toolkit';

export const registrationRequest = createAction('auth/registrationRequest');
export const registrationSuccess = createAction('auth/registrationSuccess');
export const registrationError = createAction('auth/registrationError');

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginError = createAction('auth/loginError');

export const logOutRequest = createAction('auth/logOutRequest');
export const logOutSuccess = createAction('auth/logOutSuccess');
export const logOutError = createAction('auth/logOutError');

export const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
export const getCurrentUserError = createAction('auth/getCurrentUserError');
