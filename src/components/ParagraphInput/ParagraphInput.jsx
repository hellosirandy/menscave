import React from 'react';
import { Button, Col, Dropdown, Form, Icon, Input, Menu, Row } from 'antd';
import './ParagraphInput.css';
import ImageInputContainer from '../../containers/ImageInputContainer';
const FormItem = Form.Item;
const { TextArea } = Input;

const SplitInput = ({ form, keyNum, content }) => {
  const { getFieldDecorator } = form;
  return (
    <Row gutter={12}>
      <Col xs={{ span: 24 }} sm={{ span: 12 }}>
        <FormItem label="English">
          {getFieldDecorator(`paragraphs-${keyNum}.content.english`, {
            initialValue: content ? content.english : ''
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
          {getFieldDecorator(`paragraphs-${keyNum}.content.chinese`, {
            initialValue: content ? content.chinese : ''
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

const SingleInput = ({ form, keyNum, content }) => {
  const { getFieldDecorator } = form;
  return (
    <FormItem>
      {getFieldDecorator(`paragraphs-${keyNum}.content`, {
        initialValue: content ? content : ''
      })(
        <TextArea
          style={{ resize: 'none' }}
          autosize={{ minRows: 5, maxRows: 20 }}
        />
      )}
    </FormItem>
  )
}

const ImageInput = ({ form, keyNum, content }) => {
  return (
    <ImageInputContainer form={form} keyNum={keyNum} url={content}/>
  )
}

const ParagraphInput = ({ form, handleHasTitleClick, handleAddButtonClick, handleDeleteButtonClick, index, paragraph, keyNum }) => {
  const dropdownMenu = (
    <Menu style={{ minWidth: 100 }}>
      <Menu.Item>
        <a onClick={() => handleAddButtonClick(index, 'single')}>
          <Icon type="file-text" style={{ marginRight: 5 }} />Single
        </a>
      </Menu.Item>
      <Menu.Item>
        <a  onClick={() => handleAddButtonClick(index, 'split')}>
          <Icon type="copy" style={{ marginRight: 5 }} />Split
        </a>
      </Menu.Item>
      <Menu.Item>
        <a  onClick={() => handleAddButtonClick(index, 'image')}>
          <Icon type="picture" style={{ marginRight: 5 }} />Image
        </a>
      </Menu.Item>
      {/* <Menu.Item>
        <a  onClick={() => handleAddButtonClick(index, 'video')}>
          <Icon type="video-camera" style={{ marginRight: 5 }} />Video
        </a>
      </Menu.Item> */}
    </Menu>
  );
  const { getFieldDecorator } = form;
  const content = paragraph.type === 'single' ? (<SingleInput form={form} keyNum={keyNum} content={paragraph.content}/>) : (
    paragraph.type === 'split' ? (<SplitInput form={form} keyNum={keyNum} content={paragraph.content}/>) : (<ImageInput form={form} keyNum={keyNum} content={paragraph.content}/>)
  )
  getFieldDecorator(`paragraphs-${keyNum}.type`, { initialValue: paragraph.type });
  return(
    <div className="paragraph-input">
      <div className="paragraph-header">
        <h3>Paragraph {index+1}
          <span className="paragraph-buttons">
            <Button type="primary" shape="circle" icon="flag" size="small" ghost
              style={{ marginRight: 5}}
              onClick={() => handleHasTitleClick(keyNum)}
            />
            <Button type="danger" shape="circle" icon="minus" size="small"
              style={{ marginRight: 5}}
              ghost
              onClick={() => handleDeleteButtonClick(keyNum, form)}
            />
            <Dropdown overlay={dropdownMenu} trigger={['click']}>
              <Button type="primary" shape="circle" icon="plus" size="small" ghost/>
            </Dropdown>
          </span>
        </h3>
      </div>
      {paragraph.title &&
        <FormItem label="Paragraph Title">
          {getFieldDecorator('paragraphs-0.title')(
            <Input size="large"/>
          )}
        </FormItem>
      }
      {content}
    </div>
  )
}

export default ParagraphInput;
