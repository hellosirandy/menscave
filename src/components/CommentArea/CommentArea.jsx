import React from 'react';
import CommentFormContainer from '../../containers/CommentFormContainer';
import SingleCommentContainer from '../../containers/SingleCommentContainer';
import './CommentArea.css';

const CommentArea = ({ articleKey, comments }) => {
  const singleComments = comments ? comments.map((c, i) => {
    return <SingleCommentContainer key={i} comment={c} articleKey={articleKey}/>
  }) : null;
  return (
    <div className="comment-area">
      <h3>Comment</h3>
      <CommentFormContainer articleKey={articleKey}/>
      <div className="comments-section">
        {singleComments}
      </div>
    </div>
  )
}

export default CommentArea;
