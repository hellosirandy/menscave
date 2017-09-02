import React from 'react';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import './EditArticleForm.css';
const FormItem = Form.Item;
const Option = Select.Option;

const EditArticleForm = ({ form, handleSubmit }) => {
  const { getFieldDecorator } = form;
  return (
    <div className="edit-article-form">
      <Form onSubmit={(e) => handleSubmit(e, form)}>
        <Row gutter={12}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <FormItem label="Subject">
              {getFieldDecorator('subject', {
                rules: [{ required: true, message: 'Please input the title.' }],
              })(
                <Input size="large" className="form-item"/>
              )}
            </FormItem>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <FormItem label="Category">
              {getFieldDecorator('category', {
                rules: [{ required: true, message: 'Please select a category.' }],
              })(
                <Select placeholder="Select a category" size="large" className="form-item">
                  <Option value="basketball">Basketball</Option>
                  <Option value="baseball">Baseball</Option>
                  <Option value="sneakers">Sneakers</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <div className="bottom-buttons">
          <FormItem>
            <Button type="primary" htmlType="submit" icon="save">Save</Button>
          </FormItem>
        </div>

      </Form>
    </div>
  )
}

export default EditArticleForm;
