import React from 'react';
import { Spin } from 'antd';
import './SingleArticle.css';
import ImageView from '../ImageView/ImageView';
import SingleView from '../SingleView/SingleView';
import SplitView from '../SplitView/SplitView';

const SingleArticle = ({ article, loading}) => {
  const paragraphs = article.paragraphs ? article.paragraphs.map(p => {
    return (
      <div key={p.key}>
        4444
      </div>
    )
  }) : null;
  return (
    <div className="single-article">
      <Spin spinning={loading}>
        <h3>{article.subject}</h3>
        {paragraphs}
      </Spin>
    </div>
  )
}

export default SingleArticle;
