import React, { Component } from 'react';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import ArticleCard from '../ArticleCard/ArticleCard';
import './MainPage.css';

export default class MainPage extends Component {
  render() {
    const { handleSelect, category } = this.props;
    return (
      <div className="main-page">
        <CategoryMenu
          handleSelect={handleSelect}
          category={category}
        />
        <div className="article-list">
          <ArticleCard/>
        </div>
      </div>
    )
  }
}
