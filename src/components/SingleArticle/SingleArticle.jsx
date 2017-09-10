import React from 'react';
import { Spin } from 'antd';
import './SingleArticle.css';
import ImageViewContainer from '../../containers/ImageViewContainer';
import SingleView from '../SingleView/SingleView';
import SplitView from '../SplitView/SplitView';
import SingleArticleHeaderContainer from '../../containers/SingleArticleHeaderContainer';
import CommentAreaContainer from '../../containers/CommentAreaContainer';

const SingleArticle = ({ article, loading, articleKey }) => {
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
      <div className="article-part">
        <Spin spinning={loading}>
          <div className="header-section">
            <SingleArticleHeaderContainer subject={article.subject} articleKey={article.key}/>
          </div>
          <div className="paragraph-section">
            {paragraphs}
          </div>
        </Spin>
      </div>
      <div className="comment-part">
        <CommentAreaContainer articleKey={articleKey}/>
      </div>
    </div>
  )
}

export default SingleArticle;
