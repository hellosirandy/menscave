import React from 'react';
import { Button, Form } from 'antd';
import './EditArticleForm.css';
import InfoInput from '../InfoInput/InfoInput';
import ParagraphInputContainer from 'containers/ParagraphInputContainer';
const FormItem = Form.Item;

const EditArticleForm = ({ form, handleSubmit, loading, history }) => {
  return (
    <div className="edit-article-form">
      <Form onSubmit={(e) => handleSubmit(e, form, history)}>
        <InfoInput form={form}/>
        <ParagraphInputContainer form={form}/>
        <div className="bottom-buttons">
          <FormItem>
            <Button type="primary" htmlType="submit" icon="save" loading={loading}>Save</Button>
          </FormItem>
        </div>

      </Form>
    </div>
  )
}

export default EditArticleForm;
