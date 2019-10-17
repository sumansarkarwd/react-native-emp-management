import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import HomePage from "./HomePage";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="homepage" component={HomePage} title="HomePage" initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
