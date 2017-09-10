import React, { Component } from 'react';
import SingleComment from '../components/SingleComment/SingleComment';
import API from '../api';

export default class SingleCommentContainer extends Component {
  constructor(props) {
    super(props);
    this.api = new API();
    this.state = {
      authed: false,
      replying: false,
      replyContent: '',
    }
    this.unsubscribe = this.api.onAuthStateChanged(this.handleAuthStateChanged);
  }

  componentWillUnmount() {
    this.unsubscribe();
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
    this.api.replyComment(reply, articleKey, comment.key).then(() => {
      this.handleReplySwitch(false);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <SingleComment
        comment={this.props.comment}
        authed={this.state.authed}
        replying={this.state.replying}
        handleReplySwitch={this.handleReplySwitch}
        handleInput={this.handleInput}
        handleReplySubmit={this.handleReplySubmit}
        replyContent={this.state.replyContent}
      />
    )
  }
}
