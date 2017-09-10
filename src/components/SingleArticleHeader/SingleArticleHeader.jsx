import React from 'react';
import { Icon, Popconfirm, Popover } from 'antd';
import './SingleArticleHeader.css';

const SingleArticleHeader = ({ subject, deleteArticle, editArticle, authed }) => {

  const popover = (content) => {
    return (
      <div className="popover-content">
        {content}
      </div>
    )
  }
  return(
    <div className="single-article-header">
      <h3>
        { subject }
        {authed && (
          <span className="icon-section">
            <Popover content={popover('Edit this article')} placement="bottom">
              <Icon
                className="header-icon"
                type="edit"
                onClick={editArticle}
              />
            </Popover>
            <Popconfirm
              title="Are you sure delete this article?"
              onConfirm={deleteArticle}
              okText="Yes"
              cancelText="No"
              placement="bottomLeft" >
              <Popover content={popover('Delete this article')} placement="bottom">
                <Icon className="header-icon" type="delete" />
              </Popover>
            </Popconfirm>
          </span>
        )}
      </h3>
    </div>
  )
}

export default SingleArticleHeader;
