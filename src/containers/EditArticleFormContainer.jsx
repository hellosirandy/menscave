import React, { Component } from 'react';
import EditArticleForm from 'components/EditArticleForm/EditArticleForm';
import { Route } from 'react-router-dom';
import { Form, message } from 'antd';
import API from '../api';
import Article from '../models/article';

export default class EditArticleFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
    this.api = new API();
  }
  handleSubmit = (e, form, history) => {
    this.setState({ loading: true });
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const keys = values.keys;
        const paragraphs = keys.map(k => {
          return values[`paragraphs-${k}`];
        });
        const currentTime = new Date().getTime();
        const article = new Article(values.subject, values.category, paragraphs, currentTime, currentTime);
        this.api.saveArticle(article).then(res => {
          this.setState({ loading: false });
          message.success('You have created an article.');
          history.push('/article');
        });
      }
    });
  }
  render() {
    const EAF = Form.create()(EditArticleForm);
    return(
      <Route render={({ history }) => (<EAF handleSubmit={this.handleSubmit} loading={this.state.loading} history={history}/>)}
      />
    )
  }
}
