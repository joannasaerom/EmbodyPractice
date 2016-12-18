import React, { Component } from 'react';
import MainMenu from './MainMenu';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <MainMenu/>
        <Footer/>
      </div>
    );
  }
}

export default App;
