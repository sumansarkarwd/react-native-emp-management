import {combineReducers} from 'redux';
import auth from './authReducer';
import employee from './employeeReducer';

const rootReducer = combineReducers({auth, employee});

export default rootReducer;
