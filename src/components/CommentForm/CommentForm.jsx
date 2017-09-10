import React from 'react';
import { Button, Form, Icon, Input } from 'antd';
import './CommentForm.css';
const FormItem = Form.Item;
const { TextArea } = Input;

const HighlightDisplay = ({ form, handleHighlight, handleSubmit }) => {
  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={(e) => handleSubmit(e, form)}>
      <div className="form-header">
        <Icon type="close" onClick={() => {handleHighlight(false)}}/>
      </div>
      <FormItem label="Name" >
        {getFieldDecorator('commenter', {
          rules: [{ required: true, message: 'Please input a name.' }],
          validateTrigger: ['onChange', 'onBlur']
        })(
          <Input
            placeholder="Input your name"
            autoFocus
          />
        )}
      </FormItem>
      <FormItem label="Comment" >
        {getFieldDecorator('content', {
          rules: [{ required: true, message: 'Please input your content.' }],
          validateTrigger: ['onChange', 'onBlur']
        })(
          <TextArea
            className="comment-content"
            rows={4}
            placeholder="Input your content"
            autosize={{ minRows: 5, maxRows: 20 }}
          />
        )}
      </FormItem>
      <FormItem>
        <Button
          className="submit-button"
          type="primary" icon="message" size="large"
          htmlType="submit"
          >
           Post
        </Button>
      </FormItem>
    </Form>
  )
}

const CommentForm = ({ highlight, handleHighlight, form, handleSubmit }) => {
  const content = highlight ? (
    <HighlightDisplay form={form} handleHighlight={handleHighlight} handleSubmit={handleSubmit}/>
  ) : (
    <Input className="first-display"
      placeholder="Write a comment..."
      onFocus={() => {handleHighlight(true)}}
    />
  );
  return (
    <div className={"comment-form " + (highlight ? "highlight" : null)}>
      {content}
    </div>
  )
}

export default Form.create()(CommentForm);
