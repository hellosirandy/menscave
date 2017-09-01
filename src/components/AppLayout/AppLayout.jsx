import React, { Component } from 'react';
import { Layout } from 'antd';
import AppHeader from '../AppHeader/AppHeader';
import AppContent from '../AppContent/AppContent';
const { Header, Content, Footer } = Layout;

export default class AppLayout extends Component {
  render() {
    return (
      <div className="app-layout">
        <Layout>
          <Header style={{ padding: 0 }}>
            <AppHeader/>
          </Header>
          <Content>
            <AppContent/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Men's Cave ©2017 Created by Alan Chien
          </Footer>
        </Layout>
      </div>
    )
  }
}
