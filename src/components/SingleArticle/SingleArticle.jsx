import React from 'react';
import { Spin } from 'antd';
import './SingleArticle.css';
import ImageViewContainer from '../../containers/ImageViewContainer';
import SingleView from '../SingleView/SingleView';
import SplitView from '../SplitView/SplitView';
import SingleArticleHeaderContainer from '../../containers/SingleArticleHeaderContainer';

const SingleArticle = ({ article, loading}) => {
  const paragraphs = article.paragraphs ? article.paragraphs.map((p, index) => {
    const content = p.type === 'single' ? (<SingleView content={p.content}/>) : (
      p.type === 'split' ? (<SplitView content={p.content}/>) : (
        p.type === 'image' ? (<ImageViewContainer content={p.content}/>) : null
      )
    );
    return (
      <div key={index} className="paragraph">
        {content}
      </div>
    )
  }) : null;
  return (
    <div className="single-article">
      <Spin spinning={loading}>
        <div className="header-section">
          <SingleArticleHeaderContainer subject={article.subject} articleKey={article.key}/>
        </div>
        <div className="paragraph-section">
          {paragraphs}
        </div>
      </Spin>
    </div>
  )
}

export default SingleArticle;
