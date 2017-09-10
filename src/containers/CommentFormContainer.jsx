import React, { Component } from 'react';
import CommentForm from '../components/CommentForm/CommentForm';
import Comment from '../models/comment';
import API from '../api';

export default class CommentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false,
    };
    this.api = new API();
  }

  handleHighlight = (highlight) => {
    this.setState({ highlight });
  }

  handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const newComment = new Comment(values.commenter, values.content, new Date().getTime(), this.props.articleKey);
        this.api.leaveComment(newComment, this.props.articleKey).then(() => {
          this.handleHighlight(false);
        }).catch(err => {
          console.log(err);
        });
      }
    });
  }

  render() {
    return (
      <CommentForm highlight={this.state.highlight} handleHighlight={this.handleHighlight} handleSubmit={this.handleSubmit}/>
    )
  }
}
