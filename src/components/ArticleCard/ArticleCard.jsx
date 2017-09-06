import React from 'react';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom'
import ImageView from '../ImageView/ImageView';
import SingleView from '../SingleView/SingleView';
import SplitView from '../SplitView/SplitView';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  const cardContent = article ? article.paragraphs[0].type === 'single' ? (<SingleView content={article.paragraphs[0].content}/>) : (
    article.paragraphs[0].type === 'split' ? (<SplitView content={article.paragraphs[0].content}/>) : (
      article.paragraphs[0].type === 'image' ? (<ImageView content={article.paragraphs[0].content}/>) : null
    )
  ) : null;
  const content = article ? (
    <Link to={`/article/${article.key}`}>
      <Card
        className="article-card"
        title={article.subject}
        extra={article.formatDate(article.createTime)}
        style={{ width: '100%' }}>
        {cardContent}
        <hr/>
        <div className="bottom-buttons">
          <Icon type="message" />
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
