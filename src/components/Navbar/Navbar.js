import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
class Navbar extends Component {
  render() {

    let active_color = "#F06000";
    
    return (
      <div>
        <nav id="nav-wrap">
          <NavLink className="mobile-btn" exact to="#nav-wrap" title="Show navigation">Show navigation</NavLink>
          <NavLink className="mobile-btn" exact to="#home" title="Hide navigation">Hide navigation</NavLink>
          <ul id="nav" className="nav">
            <li><NavLink className="smoothscroll" exact to="/" activeStyle={{color: active_color}}>Home</NavLink></li>
            <li><NavLink className="smoothscroll" exact to="/photography" activeStyle={{color: active_color}}>Photography</NavLink></li>
            <li><NavLink className="smoothscroll" exact to="/devblog" activeStyle={{color: active_color}}>Dev Blog</NavLink></li>
            <li><NavLink className="smoothscroll" exact to="/gaming" activeStyle={{color: active_color}}>Gaming</NavLink></li>
            <li><NavLink className="smoothscroll" exact to="/travel" activeStyle={{color: active_color}}>Travel</NavLink></li>
            <li><NavLink className="smoothscroll" exact to="/resume" activeStyle={{color: active_color}}>Resume</NavLink></li>
          </ul>
        </nav>
      </div>
    );  
  }
  
}

export default Navbar;