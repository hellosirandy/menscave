import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { message } from 'antd';
import SingleArticleHeader from '../components/SingleArticleHeader/SingleArticleHeader';
import API from '../api';

export default class SingleArticleHeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.api = new API();
  }
  handleDeleteArticle = (history) => {
    this.api.removeArticle(this.props.articleKey).then(res => {
      message.success(`You have removed ${this.props.subject}`);
      history.push('/article');
    })
  }
  handleEditArticle = () => {
    console.log('edit');
  }
  render() {
    return (
      <Route
        render={({ history }) => (
          <SingleArticleHeader
            subject={this.props.subject}
            deleteArticle={() => {this.handleDeleteArticle(history)}}
            editAritlce={this.handleEditArticle}
          />
        )}
      />
    )
  }
}
