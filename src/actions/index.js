import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

// auth actions
export const AUTH_EMAIL_CHANGED = 'AUTH_EMAIL_CHANGED';
export const AUTH_PASSWORD_CHANGED = 'AUTH_PASSWORD_CHANGED';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGIN_USER = 'LOGIN_USER';

export const authEmailChanged = email => {
  return {
    type: AUTH_EMAIL_CHANGED,
    email,
  };
};
export const authPasswordChanged = password => {
  return {
    type: AUTH_PASSWORD_CHANGED,
    password,
  };
};

export const loginUser = ({email, password}) => {
  return dispatch => {
    dispatch({type: LOGIN_USER});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFailure(dispatch));
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    user,
  });
  Actions.main();
};

const loginUserFailure = dispatch => {
  dispatch({
    type: LOGIN_USER_FAILURE,
  });
};

// employee actions
export const EMPLOYEE_UPDATE = 'EMPLOYEE_UPDATE';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const EMPLOYEE_CREATE = 'EMPLOYEE_CREATE';
export const EMPLOYEE_FETCH = 'EMPLOYEE_FETCH';
export const EMPLOYEE_SAVED = 'EMPLOYEE_SAVED';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {
      prop,
      value,
    },
  };
};
export const createEmp = ({name, phone, shift, photo}) => {
  return dispatch => {
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({
        name,
        phone,
        shift,
        photo,
      })
      .then(() => userCreated(dispatch));
  };
};
const userCreated = dispatch => {
  console.log('called');

  dispatch({type: EMPLOYEE_CREATE});
  Actions.employeeList({type: 'reset'});
};
export const empFetch = () => {
  return dispatch => {
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEE_FETCH,
          payload: snapshot.val(),
        });
      });
  };
};
export const empSave = ({name, phone, shift, uid}) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({
        name, phone, shift
      }).then(() => {
        console.log('saved!');
        dispatch({type: EMPLOYEE_SAVED});
        Actions.employeeList({type: 'reset'});
      });
  };
};
