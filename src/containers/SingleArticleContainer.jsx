import React, { Component } from 'react';
import SingleArticle from '../components/SingleArticle/SingleArticle';
import API from '../api';
import Article from '../models/article';
import { message } from 'antd';

export default class SingleArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      article: {}
    }
    this.api = new API();
  }
  componentDidMount() {
    this.api.getSingleArticle(this.props.match.params.article).then(res => {
      const article = new Article(
        res.subject,
        res.category,
        res.paragraphs,
        res.updateTime,
        res.createTime,
        this.props.match.params.article
      );
      this.setState({ article: article, loading: false });
    }).catch(res => {
      message.warning('This article doesn\'t exist.');
      this.props.history.push('/article');
    });
  }
  render() {
    const { article, loading } = this.state;
    return(
      <SingleArticle article={article} loading={loading}/>
    )
  }
}
