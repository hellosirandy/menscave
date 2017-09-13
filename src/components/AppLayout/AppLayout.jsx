import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../AppHeader/AppHeader';
import AppContentContainer from '../../containers/AppContentContainer';
const { Header, Content, Footer } = Layout;

const AppLayout = () => {
  const ios = /iPad|iPhone|iPod/.test(navigator.userAgent)
  return (
    <div className="app-layout">
      <Layout>
        <Header style={{ padding: 0, position: 'fixed', width: '100%', zIndex: 1, paddingTop: ios ? 20 : 0, height: ios ? 84 : 64 }}>
          <AppHeader/>
        </Header>
        <Content style={{ marginTop: ios ? 84 : 64 }}>
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
