import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CardSection extends Component {
  render() {
    return <View style={styles.cardSection}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  cardSection: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
});

export default CardSection;
