import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../../actions';
import CardSection from '../common/CardSection';
import {Input} from '../common/Input';

class EmployeeForm extends Component {
  createEmpHandler = () => {
    this.props.createEmp({
      name: this.props.name,
      phone: this.props.phone,
      shift: this.props.shift || 'Monday',
    });
  };
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="John"
            value={this.props.name}
            onChangeText={name =>
              this.props.employeeUpdate({prop: 'name', value: name})
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={name =>
              this.props.employeeUpdate({prop: 'phone', value: name})
            }
          />
        </CardSection>
        <CardSection>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={shift =>
              this.props.employeeUpdate({prop: 'shift', value: shift})
            }
            mode="dialog"
            style={{flex: 1}}>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
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
  {employeeUpdate},
)(EmployeeForm);
