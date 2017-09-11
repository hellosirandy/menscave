import React, { Component } from 'react';
import SingleComment from '../components/SingleComment/SingleComment';
import { message } from 'antd';
import API from '../api';

export default class SingleCommentContainer extends Component {
  constructor(props) {
    super(props);
    this.api = new API();
    this.state = {
      authed: false,
      replying: false,
      replyContent: '',
      loading: false,
    }
  }

  componentDidMount() {
    const { articleKey, comment } = this.props;
    this.api.onCommentValueChange(articleKey, comment.key, false, this.onCommentValueChange);
    this.unsubscribe = this.api.onAuthStateChanged(this.handleAuthStateChanged);
  }

  componentWillUnmount() {
    const { articleKey, comment } = this.props;
    this.setState({ comment });
    this.api.onCommentValueChange(articleKey, comment.key, true, this.onCommentValueChange);
    this.unsubscribe();
  }

  onCommentValueChange = (comment) => {
    if (comment) {
      let nextComment = this.props.comment;
      nextComment.reply = comment.reply;
      this.setState({ comment: nextComment });
    }
  }

  handleAuthStateChanged = (user) => {
    this.setState({ authed: user ? true : false });
  }

  handleReplySwitch = (replying) => {
    this.setState({ replying });
  }

  handleInput = (replyContent) => {
    this.setState({ replyContent });
  }

  handleReplySubmit = () => {
    const reply = {content: this.state.replyContent, updateTime: new Date().getTime()};
    const { comment, articleKey} = this.props;
    this.setState({ loading: true });
    this.api.replyComment(reply, articleKey, comment.key).then(() => {
      this.setState({ loading: false });
      this.handleReplySwitch(false);
    }).catch(err => {
      console.log(err);
    });
  }

  handleDeleteReply = () => {
    const { comment, articleKey} = this.props;
    this.setState({ loading: true });
    this.api.deleteReply(articleKey, comment.key).then(() => {
      message.success('You have deleted a comment');
    });
  }

  render() {
    const content = this.state.comment ? (
      <SingleComment
        comment={this.state.comment}
        authed={this.state.authed}
        replying={this.state.replying}
        handleReplySwitch={this.handleReplySwitch}
        handleInput={this.handleInput}
        handleReplySubmit={this.handleReplySubmit}
        replyContent={this.state.replyContent}
        handleDeleteReply={this.handleDeleteReply}
        loading={this.state.loading}
      />
    ) : null;
    return (
      content
    )
  }
}
