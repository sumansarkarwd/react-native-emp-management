import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

class EmployeeItem extends Component {
  render() {
    console.log('this.props.employee', this.props.employee);
    
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          Actions.employeeEdit({
            selectedEmployee: this.props.employee,
          })
        }>
        <View>
          <Card>
            <CardSection>
              <Text style={styles.nameStyle}>{this.props.employee.name}</Text>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 22,
  },
});

export default connect(
  null,
  {},
)(EmployeeItem);
