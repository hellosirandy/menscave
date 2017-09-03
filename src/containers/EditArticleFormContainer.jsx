import React, { Component } from 'react';
import EditArticleForm from 'components/EditArticleForm/EditArticleForm';
import { Form } from 'antd';
import API from '../api';
import Article from '../models/article';
const FormItem = Form.Item;

const api = new API();
export default class EditArticleFormContainer extends Component {
  handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const keys = values.keys;
        const paragraphs = keys.map(k => {
          return values[`paragraphs-${k}`];
        });
        const currentTime = new Date().getTime();
        const article = new Article(values.subject, values.category, paragraphs, currentTime, currentTime);
        api.saveArticle(article).then(res => {
          console.log('success');
        });
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
