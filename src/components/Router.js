import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './auth/LoginForm';
import EmployeeList from './employee/EmployeeList';
import EmployeeCreate from './employee/EmployeeCreate';
import EmployeeEdit from './employee/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" initial />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employee List"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
