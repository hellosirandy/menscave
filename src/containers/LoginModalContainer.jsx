import React, { Component } from 'react';
import LoginModal from '../components/LoginModal/LoginModal';
import API from '../api';
import { message } from 'antd';

export default class LoginModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggingIn: false,
    }
    this.api = new API();
  }

  handleOk = (form) => {
    this.setState({ loggingIn: true });
    form.validateFields((err, values) => {
      if (!err) {
        this.api.signIn(values.username, values.password).then(user => {
          this.setState({ loggingIn: false });
          this.props.handleCancel();
          message.success('You are now signed in.', 3);
        }).catch(err => {
          this.setState({ loggingIn: false });
          if (err.code === 'auth/wrong-password') {
            form.setFields({
              password: {
                errors: [new Error(err.message)],
              },
            });
          } else if (err.code === 'auth/user-not-found') {
            form.setFields({
              username: {
                errors: [new Error(err.message)],
              },
            });
          }
        });
      } else {
        console.log('failed');
        console.log(err);
      }
    });
  }

  render() {
    return (
      <LoginModal
        visible={this.props.visible}
        handleCancel={this.props.handleCancel}
        handleOk={this.handleOk}
        confirmLoading={this.state.loggingIn}
      />
    )
  }
}
