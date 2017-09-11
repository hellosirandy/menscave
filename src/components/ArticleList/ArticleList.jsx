import React from 'react';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import ArticleCardContainer from '../../containers/ArticleCardContainer';
import './ArticleList.css';

const ArticleList = ({ handleSelect, category, articles, loading }) => {
  const articleList = loading ? [0, 1, 2, 3].map((a, index) => {
    return (
      <ArticleCardContainer key={index}/>
    )
  }) : articles.map((a, index) => {
    return (
      <ArticleCardContainer key={index} article={a}/>
    )
  });
  return (
    <div className="main-page">
      <CategoryMenu
        handleSelect={handleSelect}
        category={category}
      />
      <div className="article-list">
        {articleList}
      </div>
    </div>
  )
}

export default ArticleList;
