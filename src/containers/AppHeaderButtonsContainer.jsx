import React, { Component } from 'react';
import AppHeaderButtons from '../components/AppHeaderButtons/AppHeaderButtons';
import API from '../api';
import { message } from 'antd';

export default class AppHeaderButtonsContainer extends Component {
  constructor(props) {
    super(props);
    this.api = new API();
    this.state = {
      signedIn: false,
      modalVisible: false,
    }
    this.api.onAuthStateChanged(this.handleAuthStateChanged);
  }

  handleAuthStateChanged = (user) => {
    this.setState({ signedIn: user ? true : false });
  }

  handleDropdownClick = (event) => {
    if (event.key === 'signin') {
      this.setState({ modalVisible: true });
    } else if (event.key === 'signout') {
      message.success('You are now signed out.', 3);
      this.api.signOut();
    }
  }

  handleModalCancel = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    return(
      <AppHeaderButtons
        signedIn={this.state.signedIn}
        dropdownClick={this.handleDropdownClick}
        modalVisible={this.state.modalVisible}
        modalCancel={this.handleModalCancel}
      />
    )
  }
}
