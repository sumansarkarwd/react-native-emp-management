import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
import {Input} from '../common/Input';
import Spinner from '../common/Spinner';
import {connect} from 'react-redux';

import {authEmailChanged, authPasswordChanged, loginUser} from '../../actions/';

class LoginForm extends Component {
  loginHandler = () => {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  };
  renderError = () => {
    if (this.props.error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{this.props.error}</Text>
        </View>
      );
    }
  };
  renderButton = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
    return <Button title="Login" onPress={() => this.loginHandler()} />;
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="sumansarkarwd@gmail.com"
              onChangeText={email => this.props.authEmailChanged(email)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Password"
              placeholder="password"
              secureTextEntry
              value={this.props.password}
              onChangeText={password =>
                this.props.authPasswordChanged(password)
              }
            />
          </CardSection>

          {this.renderError()}

          <CardSection>{this.renderButton()}</CardSection>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    padding: 6,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

export default connect(
  mapStateToProps,
  {authEmailChanged, authPasswordChanged, loginUser},
)(LoginForm);
