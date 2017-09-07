import React from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom'
import Logo from 'images/favicon.ico';
import './AppHeader.css';
import AppHeaderButtonsContainer from '../../containers/AppHeaderButtonsContainer';

const AppHeader = () => {
  return (
    <div className="app-header">
      <Link to='/article'><Avatar className="logo" size="large" src={Logo}/></Link>

      <div className="right-buttons">
        <AppHeaderButtonsContainer/>
      </div>
    </div>
  )
}

export default AppHeader;
