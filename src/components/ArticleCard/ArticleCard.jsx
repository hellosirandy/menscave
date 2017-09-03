import React from 'react';
import { Card, Icon } from 'antd';
import ImageView from '../ImageView/ImageView';
import SingleView from '../SingleView/SingleView';
import SplitView from '../SplitView/SplitView';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  console.log(article);
  const content = article.paragraphs[0].type === 'single' ? (<SingleView/>) : (
    article.paragraphs[0].type === 'split' ? (<SplitView/>) : (
      article.paragraphs[0].type === 'image' ? (<ImageView/>) : null
    )
  );
  return(
    <Card className="article-card" title="Card title" extra="01/01/2018" style={{ width: '100%' }}>
      {content}
      <hr/>
      <div className="bottom-buttons">
        <Icon type="message" />
      </div>
    </Card>
  )
}

export default ArticleCard;
