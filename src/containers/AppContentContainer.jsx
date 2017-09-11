import React, { Component } from 'react';
import AppContent from '../components/AppContent/AppContent';
import API from '../api';

export default class AppContentContainer extends Component {
  constructor(props) {
    super(props);
    this.api = new API();
    this.state = {
      authed: false,
    }
  }

  componentDidMount() {
    this.unsubscribe = this.api.onAuthStateChanged(this.handleAuthStateChanged);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleAuthStateChanged = (user) => {
    this.setState({ authed: user ? true : false });
  }

  render() {
    return (
      <AppContent authed={this.state.authed}/>
    )
  }
}
