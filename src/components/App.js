import {View, PermissionsAndroid} from 'react-native';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  componentDidMount = () => {
    var firebaseConfig = {
      apiKey: 'AIzaSyA11MzM9wxmH9u2DSe8mpKSgv0okC21my8',
      authDomain: 'employee-management-d4189.firebaseapp.com',
      databaseURL: 'https://employee-management-d4189.firebaseio.com',
      projectId: 'employee-management-d4189',
      storageBucket: "employee-management-d4189.appspot.com",
      messagingSenderId: '998447187424',
      appId: '1:998447187424:web:f0ba69c74090a147661785',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // send sms permission
    try{
      const granted = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          title: 'SMS Permission',
          message: 'Give me the damn permission',
          buttonNeutral: 'Ask Me Later',
          buttonPositive: 'Ok',
          buttonNegative: 'No'
        }
      ).then(value => {
        console.log('value', value);
        
        if(value == PermissionsAndroid.RESULTS.GRANTED) {
          console.log('YOu can send SMS now');
        } else {
          console.log('Nupe!');
        }
      });
    } catch(err) {
      console.log(err);      
    }
    // camera permission
    try{
      const granted1 = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'CAMERA Permission',
          message: 'Give me the damn permission',
          buttonNeutral: 'Ask Me Later',
          buttonPositive: 'Ok',
          buttonNegative: 'No'
        }
      ).then(value => {
        console.log('value', value);
        
        if(value == PermissionsAndroid.RESULTS.GRANTED) {
          console.log('YOu can send SMS now');
        } else {
          console.log('Nupe!');
        }
      });
    } catch(err) {
      console.log(err);      
    }
    // write external storage permission
    try{
      const granted2 = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'WRITE_EXTERNAL_STORAGE Permission',
          message: 'Give me the damn permission',
          buttonNeutral: 'Ask Me Later',
          buttonPositive: 'Ok',
          buttonNegative: 'No'
        }
      ).then(value => {
        console.log('value', value);
        
        if(value == PermissionsAndroid.RESULTS.GRANTED) {
          console.log('YOu can send SMS now');
        } else {
          console.log('Nupe!');
        }
      });
    } catch(err) {
      console.log(err);      
    }
  };
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
  // console.log(store.getState());
});

export default App;
