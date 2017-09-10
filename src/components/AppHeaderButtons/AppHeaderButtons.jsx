import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import LoginModalContainer from '../../containers/LoginModalContainer';

const AppHeaderButtons = ({ authed, dropdownClick, modalVisible, modalCancel }) => {
  const dropdownMenu = (
    <Menu onClick={dropdownClick}>
      <Menu.Item key={authed ? 'signout' : 'signin'} >{ authed ? 'Sign out' : 'Sign in' }</Menu.Item>
    </Menu>
  );
  return (
    <div className="app-header-buttons">
      {authed && (
        <Link to='/newarticle'>
          <Button icon="plus" shape="circle" type="dashed" ghost style={{ marginRight: 8 }}
          />
        </Link>
      )}
      <Dropdown overlay={dropdownMenu} placement="bottomRight" trigger={['click']}>
        <Button icon="user" shape="circle" type="dashed" ghost/>
      </Dropdown>
      <LoginModalContainer visible={modalVisible} handleCancel={modalCancel}/>
    </div>
  )
}

export default AppHeaderButtons;
