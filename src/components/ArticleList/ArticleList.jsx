import React from 'react';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleList.css';

const ArticleList = ({ handleSelect, category }) => {
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

export default ArticleList;
