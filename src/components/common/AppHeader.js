import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AppHeader = props => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#d81b60',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative',
  },
  textStyle: {
    fontSize: 26,
    color: '#fff',
  },
});

export default AppHeader;
