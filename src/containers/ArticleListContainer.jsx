import React, { Component } from 'react';
import ArticleList from 'components/ArticleList/ArticleList';

export default class ArticleListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'all',
    }
  }

  handleSelect = (category) => {
    this.setState({ category: category.key });
  }

  render() {
    return(
      <ArticleList
        handleSelect={this.handleSelect}
        category={this.state.category}
      />
    )
  }
}
