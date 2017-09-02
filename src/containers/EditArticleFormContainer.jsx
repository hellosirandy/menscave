import React, { Component } from 'react';
import EditArticleForm from 'components/EditArticleForm/EditArticleForm';
import { Form } from 'antd';
const FormItem = Form.Item;

export default class EditArticleFormContainer extends Component {
  handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  }
  render() {
    const EAF = Form.create()(EditArticleForm);
    return(
      <EAF handleSubmit={this.handleSubmit}/>
    )
  }
}
