import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import New from './component/New';
import Header from './component/Header';
import FormInfo from './component/FormInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <FormInfo/>
        <New/>

      </div>
    );
  }
}

export default App;
