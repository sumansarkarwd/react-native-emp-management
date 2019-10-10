import React, {Component} from 'react';
import {View, Linking} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, empSave} from '../../actions';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';
import SendSMS from 'react-native-sms';
import SmsAndroid from 'react-native-get-sms-android';

class EmployeeEdit extends Component {
  updateEmpHandler = () => {
    // console.log(this.props.name, this.props.phone, this.props.shift, this.props.selectedEmployee.uid);
    this.props.empSave({
      name: this.props.name,
      phone: this.props.phone,
      shift: this.props.shift,
      uid: this.props.selectedEmployee.uid,
    });
  };
  textShiftHandler = () => {
    // Linking.openURL(`sms:${this.props.phone}?body=Foo`);
    // Comunication.text(
    //   this.props.phone,
    //   `Your shift is on: ${this.props.shift}`,
    // );
    // sms(this.props.phone, 'Foo').catch(console.error);
    // SmsAndroid.autoSend(
    //   this.props.phone,
    //   'message',
    //   fail => {
    //     console.log('Failed with this error: ' + fail);
    //   },
    //   success => {
    //     console.log('SMS sent successfully');
    //   },
    // );
    // SendSMS.send(
    //   {
    //     body: `Your shift is on: ${this.props.shift}`,
    //     recipients: [this.props.phone],
    //     successTypes: ['sent', 'queued'],
    //     allowAndroidSendWithoutReadPermission: true,
    //   },
    //   (completed, cancelled, error) => {
    //     console.log(
    //       'SMS Callback: completed: ' +
    //         completed +
    //         ' cancelled: ' +
    //         cancelled +
    //         'error: ' +
    //         error,
    //     );
    //   },
    // );
    console.log('this.props.phone', this.props.phone);
    
    SmsAndroid.autoSend(
      this.props.phone,
      `Your shift is on: ${this.props.shift}`,
      (fail) => {
        console.log('Failed with this error: ' + fail);
      },
      (success) => {
        console.log('SMS sent successfully');
      },
    );
  };
  componentDidMount = () => {
    _.each(this.props.selectedEmployee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  };
  render() {
    return (
      <View style={{paddingTop: 50}}>
        <Card>
          <EmployeeForm {...this.props} />
          <CardSection>
            <Button
              title="Save"
              value={this.props.shift}
              onPress={() => this.updateEmpHandler()}
            />
          </CardSection>
          <CardSection>
            <Button
              title="Text Shift"
              value={this.props.shift}
              onPress={() => this.textShiftHandler()}
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
  {employeeUpdate, empSave},
)(EmployeeEdit);
