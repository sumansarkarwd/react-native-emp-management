import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, createEmp} from '../../actions';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  createEmpHandler = () => {
    this.props.createEmp({
      name: this.props.name,
      phone: this.props.phone,
      shift: this.props.shift || 'Monday',
    });
  };
  render() {
    console.log(this.props.emp);

    return (
      <View style={{paddingTop: 50}}>
        <Card>
          <EmployeeForm {...this.props} />
          <CardSection>
            <Button
              title="Create"
              value={this.props.shift}
              onPress={() => this.createEmpHandler()}
            />
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.employee.name,
    phone: state.employee.phone,
    shift: state.employee.shift,
  };
};

export default connect(
  mapStateToProps,
  {employeeUpdate, createEmp},
)(EmployeeCreate);
