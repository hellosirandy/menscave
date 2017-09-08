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
      article: {},
      fetching: false,
    }
    this.api = new API();
  }
  componentDidMount() {
    const key = this.props.articleKey;
    if (key) {
      this.fetchArticle(key);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.articleKey !== this.props.articleKey) {
      if (nextProps.articleKey) {
        this.fetchArticle(nextProps.articleKey);
      } else {
        this.setState({ article: {} });
      }
    }
  }

  fetchArticle = (key) => {
    this.setState({ fetching: true });
    this.api.getSingleArticle(key).then(res => {
      const article  = new Article(
        res.subject,
        res.category,
        res.paragraphs,
        res.updateTime,
        res.createTime,
        key
      );
      this.setState({ article, fetching: false });
    }).catch(res => {
      console.log(res);
    });
  }

  handleSubmit = (e, form, history) => {
    const isCreate = this.props.articleKey ? false : true;
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
        const promise = this.api.saveArticle(article, this.props.articleKey);
        promise.then(res => {
          this.setState({ loading: false });
          message.success(`You have ${isCreate ? 'created' : 'modified'} ${article.subject}.`);
          history.push(isCreate ? '/article' : `/article/${this.props.articleKey}`);
        });
      }
    });
  }
  render() {
    const EAF = Form.create()(EditArticleForm);
    return(
      <Route
        render={({ history }) => (
          <EAF
            handleSubmit={this.handleSubmit}
            loading={this.state.loading}
            history={history}
            article={this.state.article}
            fetching={this.state.fetching}
          />
        )}
      />
    )
  }
}
