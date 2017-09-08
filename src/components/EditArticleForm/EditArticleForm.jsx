import React from 'react';
import { Button, Form, Spin } from 'antd';
import './EditArticleForm.css';
import InfoInput from '../InfoInput/InfoInput';
import ParagraphInputContainer from 'containers/ParagraphInputContainer';
const FormItem = Form.Item;

const EditArticleForm = ({ form, handleSubmit, loading, history, article, fetching }) => {
  return (
    <div className="edit-article-form">
      <Spin spinning={fetching}>
        <Form onSubmit={(e) => handleSubmit(e, form, history)}>
          <InfoInput form={form} subject={article.subject} category={article.category}/>
          <ParagraphInputContainer form={form} paragraphs={article.paragraphs}/>
          <div className="bottom-buttons">
            <FormItem>
              <Button type="primary" htmlType="submit" icon="save" loading={loading}>Save</Button>
            </FormItem>
          </div>

        </Form>
      </Spin>
    </div>
  )
}

export default EditArticleForm;
