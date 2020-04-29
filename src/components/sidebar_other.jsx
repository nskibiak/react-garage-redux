import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mechanic from '../assets/images/mechanic.jpg';
import Logo from '../assets/images/logo.svg';

class SidebarOther extends Component {
  render() {
    return (
      <div className="aside">
        <div className="illustration">
          <img src={Mechanic} alt="Mechanic" className="illustration"/>
        </div>
        <img src={Logo} alt="Logo" className="logo"/>
        <h1>Garage Skibiak</h1>
        <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictional).</p>
        <Link to="/">Back to List</Link>
      </div>
    );
  }
}

export default SidebarOther;


