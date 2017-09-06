import React, { Component } from 'react';
import ArticleList from 'components/ArticleList/ArticleList';
import Article from '../models/article';
import API from '../api';
const api = new API();

export default class ArticleListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'all',
      articles: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchArticles(this.state.category);
  }

  fetchArticles = (category) => {
    this.setState({ articles: [], loading: true });
    api.getArticles(category).then(res => {
      this.onArticlesChange(res);
    });
  }

  handleSelect = (category) => {
    this.setState({ category: category.key });
    this.fetchArticles(category.key);
  }

  onArticlesChange = (articles) => {
    let nextArticles = this.state.articles;
    for (let key in articles) {
      nextArticles.push(new Article(
        articles[key].subject,
        articles[key].category,
        articles[key].paragraphs,
        articles[key].updateTime,
        articles[key].createTime,
        key,
      ));
    }
    this.setState({ articles: nextArticles, loading: false });
  }

  render() {
    return(
      <ArticleList
        handleSelect={this.handleSelect}
        category={this.state.category}
        articles={this.state.articles}
        loading={this.state.loading}
      />
    )
  }
}
