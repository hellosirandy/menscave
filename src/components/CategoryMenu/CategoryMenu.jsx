import React, { Component } from 'react';
import { Menu } from 'antd';
import './CategoryMenu.css';

export default class CategoryMenu extends Component {
  render() {
    const { handleSelect, category } = this.props;
    return (
      <div className="category-menu">
        <Menu
          onClick={handleSelect}
          selectedKeys={[category]}
          mode="horizontal"
          theme="light">
          <Menu.Item className="menu-item" key="all">
            All
          </Menu.Item>
          <Menu.Item className="menu-item" key="basketball">
            Basketball
          </Menu.Item>
          <Menu.Item className="menu-item" key="baseball">
            Baseball
          </Menu.Item>
          <Menu.Item className="menu-item" key="sneakers">
            Sneakers
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
