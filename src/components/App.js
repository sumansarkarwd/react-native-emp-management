import {View} from 'react-native';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Router />
        </View>
      </Provider>
    );
  }
}

store.subscribe(() => {
  console.log(store.getState());
});

export default App;
