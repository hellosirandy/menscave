import React from 'react';
import { Button, Form, Spin } from 'antd';
import './EditArticleForm.css';
import InfoInput from '../InfoInput/InfoInput';
import ParagraphInputContainer from 'containers/ParagraphInputContainer';
import { Route } from 'react-router-dom';
const FormItem = Form.Item;

const EditArticleForm = ({ form, handleSubmit, loading, history, article, fetching }) => {
  return (
    <Route
      render={({ history }) => (
        <div className="edit-article-form">

          <Button icon="arrow-left" className="back-button" onClick={() => history.goBack()}>Back</Button>
          <Spin spinning={fetching}>
            <Form onSubmit={(e) => handleSubmit(e, form, history)}>
              <InfoInput form={form} subject={article.subject} category={article.category}/>
              <ParagraphInputContainer form={form} paragraphs={article.paragraphs}/>
              <div className="bottom-buttons">
                <FormItem>
                  
                  <Button htmlType="button" icon="close" className="cancel-button" onClick={() => history.goBack()}>Cancel</Button>
                  <Button type="primary" htmlType="submit" icon="save" loading={loading}>Save</Button>
                </FormItem>
              </div>

            </Form>
          </Spin>
        </div>

      )}
    />

  )
}

export default EditArticleForm;
