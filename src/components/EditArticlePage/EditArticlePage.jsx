import React from 'react';
import { Col, Form, Input, Row } from 'antd';
import './EditArticlePage.css';
import EditArticleFormContainer from 'containers/EditArticleFormContainer';
const FormItem = Form.Item;

const EditArticlePage = () => {
  return (
    <div className="edit-article-page">
      <EditArticleFormContainer/>
    </div>
  )
}

export default EditArticlePage;
