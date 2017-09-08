import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../AppHeader/AppHeader';
import AppContentContainer from '../../containers/AppContentContainer';
const { Header, Content, Footer } = Layout;

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Layout>
        <Header style={{ padding: 0 }}>
          <AppHeader/>
        </Header>
        <Content>
          <AppContentContainer/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Men's Cave ©2017 Created by Alan Chien
        </Footer>
      </Layout>
    </div>
  )
}

export default AppLayout;
