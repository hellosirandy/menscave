import React from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const InfoInput = ({ form }) => {
  const { getFieldDecorator } = form;
  return(
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
  )
}

export default InfoInput;
