import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Card extends Component {
  render() {
    return <View style={styles.cardContainer}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#999',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginHorizontal: 8,
    marginTop: 15,
  },
});

export default Card;
