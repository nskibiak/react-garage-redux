import React, { Component } from 'react';
import carLogo from '../assets/images/logo_square.svg';
import { FiTrash2 } from 'react-icons/fi';

class ShowPage extends Component {

  render() {
    return (
      <div className="car-container">
        <div className="car-card">
          <img src={carLogo} alt="Car Logo" className="car-picture"/>
          <div className="car-details">
            <div className="plate">
            </div>
            <button className="delete"><FiTrash2 /> Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPage;
