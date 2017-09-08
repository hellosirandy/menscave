import React from 'react';
import './EditArticlePage.css';
import EditArticleFormContainer from 'containers/EditArticleFormContainer';

const EditArticlePage = ({match}) => {
  return (
    <div className="edit-article-page">
      <EditArticleFormContainer articleKey={match.params.article}/>
    </div>
  )
}

export default EditArticlePage;
