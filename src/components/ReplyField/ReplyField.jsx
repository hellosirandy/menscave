import React from 'react';
import { Input } from 'antd';
import './ReplyField.css';
const { TextArea } = Input;

export default ({ reply, replying, handleInput }) => {
  const content = replying ? (
    <div className="reply-text">
      <TextArea
        placeholder="Reply..." autosize
        style={{ resize: 'none' }}
        onChange={(e)=>{handleInput(e.target.value);}}
        defaultValue={reply ? reply.content : ''}
      />
    </div>

  ) : (reply ? (
    reply.content
  ) : '');
  return (
    <div className="reply-field">
      {content}
    </div>
  )
}
