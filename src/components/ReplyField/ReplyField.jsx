import React from 'react';
import { Avatar, Input } from 'antd';
import './ReplyField.css';
const { TextArea } = Input;

export default ({ comment, replying, handleInput }) => {
  const { reply } = comment;
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
    <div className="admin-reply">
      <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <div className="reply-body">
        <div className="top">
          <span className="admin-name">
            Alan
          </span>
          <span className="reply-content">
            {reply.content}
          </span>
        </div>
        <div className="reply-create-time">
          {comment.formatDate(reply.updateTime)}
        </div>
      </div>

    </div>

  ) : '');
  return (
    <div className="reply-field">
      {content}
    </div>
  )
}
