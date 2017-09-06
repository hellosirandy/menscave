import React, { Component } from 'react';
import SingleArticle from '../components/SingleArticle/SingleArticle';
import API from '../api';
const api = new API();

export default class SingleArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      article: {}
    }
  }
  componentDidMount() {
    api.getSingleArticle(this.props.match.params.article).then(res => {
      console.log(res);
      this.setState({ article: res, loading: false });
    });
  }
  render() {
    const { article, loading } = this.state;
    return(
      <SingleArticle article={article} loading={loading}/>
    )
  }
}
