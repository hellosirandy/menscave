import React, { Component } from 'react';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import Logo from 'images/favicon.ico';
import './AppHeader.css';

export default class AppHeader extends Component {

  render() {
    const dropdownMenu = (
      <Menu>
        <Menu.Item key="1" >Login</Menu.Item>
      </Menu>
    );
    return (
      <div className="app-header">
        <Avatar className="logo" size="large" src={Logo}  />
        <div className="right-buttons">
          <Button icon="plus" shape="circle" type="dashed" style={{ marginRight: 8 }}
            ghost
          />
          <Dropdown overlay={dropdownMenu} placement="bottomRight" trigger={['click']}>
            <Button icon="user" shape="circle" type="dashed"
              ghost
            />
          </Dropdown>
        </div>
      </div>
    )
  }
}
