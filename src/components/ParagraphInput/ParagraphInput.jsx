import React from 'react';
import { Button, Col, Dropdown, Form, Icon, Input, Menu, Row } from 'antd';
import './ParagraphInput.css';
import ImageInputContainer from '../../containers/ImageInputContainer';
const FormItem = Form.Item;
const { TextArea } = Input;

const SplitInput = ({ form }) => {
  const { getFieldDecorator } = form;
  return (
    <Row gutter={12}>
      <Col xs={{ span: 24 }} sm={{ span: 12 }}>
        <FormItem label="English">
          {getFieldDecorator(`paragraphs-0.content.english`, {
            initialValue: 'English'
          })(
            <TextArea
              style={{ resize: 'none' }}
              autosize={{ minRows: 5, maxRows: 20 }}
            />
          )}
        </FormItem>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }}>
        <FormItem label="中文">
          {getFieldDecorator(`paragraphs-0.content.chinese`, {
            initialValue: '中文'
          })(
            <TextArea
              style={{ resize: 'none' }}
              autosize={{ minRows: 5, maxRows: 20 }}
            />
          )}
        </FormItem>
      </Col>
    </Row>
  )
}

const SingleInput = ({ form }) => {
  const { getFieldDecorator } = form;
  return (
    <FormItem>
      {getFieldDecorator(`paragraphs-0.content`)(
        <TextArea
          style={{ resize: 'none' }}
          autosize={{ minRows: 5, maxRows: 20 }}
        />
      )}
    </FormItem>
  )
}

const ImageInput = ({ form }) => {
  return (
    <ImageInputContainer form={form}/>
  )
}

const ParagraphInput = ({ hasTitle, form, handleHasTitleClick, handleAddButtonClick }) => {
  const dropdownMenu = (
    <Menu style={{ minWidth: 100 }}>
      <Menu.Item>
        <a onClick={() => handleAddButtonClick('single')}>
          <Icon type="file-text" style={{ marginRight: 5 }} />Single
        </a>
      </Menu.Item>
      <Menu.Item>
        <a  onClick={() => handleAddButtonClick('split')}>
          <Icon type="copy" style={{ marginRight: 5 }} />Split
        </a>
      </Menu.Item>
      <Menu.Item>
        <a  onClick={() => handleAddButtonClick('image')}>
          <Icon type="picture" style={{ marginRight: 5 }} />Image
        </a>
      </Menu.Item>
      <Menu.Item>
        <a  onClick={() => handleAddButtonClick('video')}>
          <Icon type="video-camera" style={{ marginRight: 5 }} />Video
        </a>
      </Menu.Item>
    </Menu>
  );
  const { getFieldDecorator } = form;
  return(
    <div className="paragraph-input">
      <div className="paragraph-header">
        <h3>Paragraph 1
          <span className="paragraph-buttons">
            <Button type="primary" shape="circle" icon="flag" size="small" ghost
              style={{ marginRight: 5}}
              onClick={handleHasTitleClick}
            />
            <Button type="danger" shape="circle" icon="minus" size="small"
              style={{ marginRight: 5}}
              ghost
            />
            <Dropdown overlay={dropdownMenu} trigger={['click']}>
              <Button type="primary" shape="circle" icon="plus" size="small" ghost/>
            </Dropdown>
          </span>
        </h3>
      </div>
      {hasTitle &&
        <FormItem label="Paragraph Title">
          {getFieldDecorator('paragraphs-0.title')(
            <Input size="large"/>
          )}
        </FormItem>
      }
      {/* <SplitInput form={form}/> */}
      {/* <SingleInput form={form}/> */}
      <ImageInput form={form}/>
    </div>
  )
}

export default ParagraphInput;
