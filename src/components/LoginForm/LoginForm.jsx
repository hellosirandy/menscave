import React from 'react';
import { Form, Input } from 'antd';
const FormItem = Form.Item;

const LoginForm = ({form}) => {
  const { getFieldDecorator } = form;
  return (
    <div className="login-form">
      <Form>
        <FormItem label="Username">
          {getFieldDecorator('username', {
            rules: [{
              type: 'email', message: 'Please input a valid E-mail as username',
            }, {
              required: true, message: 'Please input username',
            }],
            validateTrigger: ['onBlur'],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem label="Password">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password.' }],
          })(
            <Input type="password"/>
          )}
        </FormItem>
      </Form>
    </div>
  )
}

export default LoginForm;
