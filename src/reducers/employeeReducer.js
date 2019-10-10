import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH, EMPLOYEE_SAVED} from '../actions/';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  employees: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVED:
      return {...state, name: '', phone: '', shift: ''};
    case EMPLOYEE_FETCH:
      return {...state, employees: action.payload};
    default:
      return state;
  }
};
