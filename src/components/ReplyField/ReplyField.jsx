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
      <Avatar className="avatar" src="https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-1/p160x160/12931185_1307371602612803_9119272392709512282_n.jpg?oh=1e465fdd233a7d4b3bd5f0f7827cac4c&oe=5A55BAC0" />
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
