import 'antd/dist/antd.css';
import React, { Component } from 'react';
import './App.css';
import AppLayout from './components/AppLayout/AppLayout.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppLayout/>
      </div>
    );
  }
}

export default App;
