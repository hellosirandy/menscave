import React from 'react';
import './SingleComment.css';
import { Avatar, Button, Popconfirm } from 'antd';
import ReplyField from '../ReplyField/ReplyField';

const CommentHeaderButtons = ({ replying, handleReplySwitch, handleReplySubmit, replyContent }) => {
  const enterOrDelete = replying ? (
    <Button
      shape="circle" icon="enter"
      size="small" style={{ marginRight: 5 }} disabled={!replyContent}
      onClick={handleReplySubmit}
    />
  ) : (
    <Popconfirm title="Are you sure you want to delete this article?"
      onConfirm={() => {this.handelDeleteConfirm()}}
      okText="Yes" cancelText="No" placement="left">
      <Button
        shape="circle" icon="delete"
        size="small"
        style={{ marginRight: 5 }}
      />
    </Popconfirm>
  )
  return (
    <div className="comment-header-buttons">
      {enterOrDelete}
      <Button
        shape="circle" icon={replying ? "close" : "message"}
        size="small" onClick={() => {handleReplySwitch(!replying)}}
      />
    </div>
  )
}

export default ({ comment, authed, replying, handleReplySwitch, handleInput, replyContent, handleReplySubmit }) => {
  const commentHeaderButtons = authed ? (
    <CommentHeaderButtons replying={replying} handleReplySwitch={handleReplySwitch} replyContent={replyContent} handleReplySubmit={handleReplySubmit}/>
  ) : null;
  const replyField = (replying || comment.reply) ? (
    <ReplyField reply={comment.reply} replying={replying} handleInput={handleInput}/>
  ) : null;
  return (
    <div className="single-comment">
      <div className="comment-header">
        {commentHeaderButtons}
        <Avatar className="avatar" icon="user" />
        <div className="comment-info">
          <div className="commenter">
            {comment.commenter}
          </div>
          <div className="create-time">
            {comment.formatDate(comment.createTime)}
          </div>
        </div>
      </div>
      <div className="comment-content">
        {comment.content}
      </div>
      {replyField}
    </div>
  )
}
