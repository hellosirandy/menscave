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
    this.api.onCommentAdded(this.props.articleKey, false, this.onCommentAdded);
  }

  componentWillUnmount() {
    this.api.onCommentAdded(this.props.articleKey, true, this.onCommentAdded);
  }

  onCommentAdded = (comment, key) => {
    const comments = this.state.comments;
    const newComment = new Comment(comment.commenter, comment.content, comment.createTime, comment.articleKey, comment.reply, key);
    comments.push(newComment);
    this.setState({ comments });
  }

  render() {
    return(
      <CommentArea articleKey={this.props.articleKey} comments={this.state.comments}/>
    )
  }
}
