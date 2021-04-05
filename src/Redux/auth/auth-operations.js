import axios from 'axios';
import * as actions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(actions.registrationRequest());

  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);

    dispatch(actions.registrationSuccess(data));
  } catch (error) {
    dispatch(actions.registrationError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(actions.loginRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);

    dispatch(actions.loginSuccess(data));
  } catch (error) {
    dispatch(actions.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(actions.logOutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();

    dispatch(actions.logOutSuccess());
  } catch (error) {
    dispatch(actions.logOutError(error.message));
  }
};

const currentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(actions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');
    dispatch(actions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(actions.getCurrentUserError(error.message));
  }
};

const authOperations = { register, login, logOut, currentUser };
export default authOperations;
