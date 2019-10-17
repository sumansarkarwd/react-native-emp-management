import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import HomePage from './HomePage';
import SearchResults from './SearchResults';
import Cocktail from './Cocktail';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="homepage" component={HomePage} title="HomePage" initial />
        <Scene key="searchResults" component={SearchResults} title="HomePage" />
        <Scene key="cocktail" component={Cocktail} title="Cocktail" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
