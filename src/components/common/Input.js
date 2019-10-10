import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Card from './Card';

const Input = props => (
  <View style={styles.inputContainer}>
    <Text style={styles.textStyle}>{props.label}</Text>
    <TextInput
      autoCorrect={false}
      placeholder={props.placeholder}
      style={styles.inputStyle}
      secureTextEntry={props.secureTextEntry}
      value={props.value}
      onChangeText={val => props.onChangeText(val)}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    alignItems: 'center',
  },
  inputStyle: {
    padding: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3,
  },
  textStyle: {
    fontSize: 16,
    padding: 5,
    flex: 1,
  },
});

export {Input};
