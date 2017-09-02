import React from 'react';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom'
import Logo from 'images/favicon.ico';
import './AppHeader.css';

const AppHeader = () => {
  const dropdownMenu = (
    <Menu>
      <Menu.Item key="1" >Login</Menu.Item>
    </Menu>
  );
  return (
    <div className="app-header">
      <Link to='/article'><Avatar className="logo" size="large" src={Logo}/></Link>

      <div className="right-buttons">
        <Link to='/newarticle'>
          <Button icon="plus" shape="circle" type="dashed" ghost style={{ marginRight: 8 }}
          />
        </Link>

        <Dropdown overlay={dropdownMenu} placement="bottomRight" trigger={['click']}>
          <Button icon="user" shape="circle" type="dashed" ghost/>
        </Dropdown>
      </div>
    </div>
  )
}

export default AppHeader;
