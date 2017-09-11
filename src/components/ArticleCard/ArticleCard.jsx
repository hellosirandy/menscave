import React from 'react';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom'
import ImageViewContainer from '../../containers/ImageViewContainer';
import SingleView from '../SingleView/SingleView';
import SplitView from '../SplitView/SplitView';
import './ArticleCard.css';

const ArticleCard = ({ article, commentCount }) => {
  const cardContent = article ? article.paragraphs[0].type === 'single' ? (<SingleView content={article.paragraphs[0].content}/>) : (
    article.paragraphs[0].type === 'split' ? (<SplitView content={article.paragraphs[0].content}/>) : (
      article.paragraphs[0].type === 'image' ? (<ImageViewContainer content={article.paragraphs[0].content}/>) : null
    )
  ) : null;
  const content = article ? (
    <Link to={`/article/${article.key}`}>
      <Card
        className="article-card"
        title={article.subject}
        extra={article.formatDate(article.createTime)}
        style={{ width: '100%' }}>

        <div className="card-content">
          {cardContent}
        </div>
        <hr/>
        <div className="bottom-buttons">
          <Icon type="message" /> {commentCount}
        </div>
      </Card>
    </Link>
  ) : (<Card loading className="article-card"></Card>);
  return(
    <div>
      {content}
    </div>
  )
}

export default ArticleCard;
