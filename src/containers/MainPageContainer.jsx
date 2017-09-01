import React, { Component } from 'react';
import MainPage from 'components/MainPage/MainPage';

export default class MainPageContainer extends Component {
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
      <MainPage
        handleSelect={this.handleSelect}
        category={this.state.category}
      />
    )
  }
}
