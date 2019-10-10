import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => this.props.onPress()}>
        <Text style={styles.buttonTextStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d81b60',
    margin: 5,
    padding: 5,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#d81b60',
  },
});

export default Button;
