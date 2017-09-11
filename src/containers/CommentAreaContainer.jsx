import React, { Component } from 'react';
import CommentArea from '../components/CommentArea/CommentArea';
import API from '../api';
import Comment from '../models/comment';

export default class CommentAreaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
    this.api = new API();
  }

  componentDidMount() {
    this.api.onCommentAddedOrRemoved(this.props.articleKey, false, this.onCommentAdded, 'child_added');
    this.api.onCommentAddedOrRemoved(this.props.articleKey, false, this.onCommentRemoved, 'child_removed');
  }

  componentWillUnmount() {
    this.api.onCommentAddedOrRemoved(this.props.articleKey, true, this.onCommentAdded, 'child_added');
    this.api.onCommentAddedOrRemoved(this.props.articleKey, true, this.onCommentRemoved, 'child_removed');
  }

  onCommentAdded = (comment, key) => {
    const comments = this.state.comments;
    const newComment = new Comment(comment.commenter, comment.content, comment.createTime, comment.articleKey, comment.reply, key);
    comments.push(newComment);
    this.setState({ comments });
  }

  onCommentRemoved = (comment, key) => {
    const comments = this.state.comments;
    const deleteComment = comments.filter((c, i) => {
      return(c.key === key);
    })[0];
    comments.splice(comments.indexOf(deleteComment), 1);
    this.setState({ comments });
  }

  render() {
    return(
      <CommentArea articleKey={this.props.articleKey} comments={this.state.comments}/>
    )
  }
}
