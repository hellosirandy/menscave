import React, { Component } from 'react';
// import MainPage from '../MainPage/MainPage';
import MainPageContainer from 'containers/MainPageContainer';
import './AppContent.css';

export default class AppContent extends Component {
  render() {
    return(
      <div className="app-content">
        <MainPageContainer/>
        {/* <MainPage/> */}
      </div>
    )
  }
}
