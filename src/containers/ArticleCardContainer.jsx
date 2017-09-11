import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import API from '../api';

export default class ArticleCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentCount: 0
    }
    this.api = new API();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.article) {
      this.api.getAllComment(nextProps.article.key).then(res => {
        this.setState({ commentCount: Object.keys(res).length });
      })
    }

  }
  render() {
    return (
      <ArticleCard article={this.props.article} commentCount={this.state.commentCount}/>
    )
  }
}
