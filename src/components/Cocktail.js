import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Cocktail extends Component {
  render() {
    let {cocktail} = this.props;
    return (
      <View>
        <Text>{cocktail.strDrink}</Text>
      </View>
    );
  }
}

export default Cocktail;
