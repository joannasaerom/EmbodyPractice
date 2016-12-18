import React, { Component } from 'react';
import './MainMenu.css';

class MainMenu extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Company</li>
          <li>Parylene</li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;
