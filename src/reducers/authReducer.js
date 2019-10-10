import {
  AUTH_EMAIL_CHANGED,
  AUTH_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER,
} from '../actions/';

const INITIAL_STATE = {
  email: 'sumansarkarwd@gmail.com',
  password: '123456',
  user: null,
  error: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_EMAIL_CHANGED:
      return {...state, email: action.email};
    case AUTH_PASSWORD_CHANGED:
      return {...state, password: action.password};
    case LOGIN_USER:
      return {...state, loading: true, error: null};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.user, error: null, loading: false};
    case LOGIN_USER_FAILURE:
      return {...state, error: 'Authentication failed!', loading: false};
    default:
      return state;
  }
};
