import React from 'react';
import { Form, Modal } from 'antd';
import LoginForm from '../LoginForm/LoginForm';

const LoginModal = ({ visible, handleOk, confirmLoading, handleCancel, form }) => {
  return (
    <Modal
      title="Login"
      okText="Login"
      cancelText="cancel"
      visible={visible}
      onOk={() => {handleOk(form)}}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}>
      <LoginForm form={form}/>
    </Modal>
  )
}

export default Form.create()(LoginModal);
