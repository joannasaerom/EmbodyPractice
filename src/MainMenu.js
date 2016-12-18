import React, { Component } from 'react';
import Link from 'react-router';

class MainMenu extends Component {
  render() {
    var menuItems = [
      {name: 'Home'},
      {name: 'Company', subMenus: [{name: 'From CEO'}, {name: 'About Company'}]},
      {name: 'Parylene', subMenus: [{name: 'Parylene Concept'}, {name: 'Parylene Merit'}, {name: 'Parylene Gear'}]}
    ]
    return (
      <div clasName="navbar">
      {menuItems.map(function(menuItem, i){
        if (menuItem.subMenus != undefined){
          return (
            <ul key={i}>{menuItem.name}
            {menuItem.subMenus.map(function(subMenu, i) {
              return <li key={i}>{subMenu.name}</li>;
            })}
            </ul>
          )
        } else {
          return (
            <ul key={i}>{menuItem.name}</ul>
          )
        }
      })}
    </div>
    );
  }
}

export default MainMenu;
