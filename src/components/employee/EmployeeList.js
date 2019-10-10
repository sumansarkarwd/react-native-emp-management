import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {empFetch} from '../../actions';
import _ from 'lodash';
import EmployeeItem from './EmployeeItem';

class EmployeeList extends Component {
  componentDidMount = () => {
    this.props.empFetch();
  };
  renderItem = emp => {
    return <EmployeeItem employee={emp.item} />;
  };
  render() {
    console.log(this.props.employees);

    return (
      <View style={{paddingTop: 50}}>
        <FlatList
          data={this.props.employees}
          renderItem={this.renderItem}
          keyExtractor={emp => emp.uid}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employee.employees, (val, uid) => {
    return {...val, uid};
  });
  return {
    employees,
  };
};

export default connect(
  mapStateToProps,
  {empFetch},
)(EmployeeList);
