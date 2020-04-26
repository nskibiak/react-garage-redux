import React, { Component } from 'react';
import carLogo from '../assets/images/logo_square.svg';

class Car extends Component {
  render () {
    return (
      <li className="car-smallad">
        <img src={carLogo} alt="Car Logo" className="car-logo"/>
        <div className="car-details">
          <span>{this.props.car.brand} - {this.props.car.model}</span>
          <div className="ownerLine"><strong>Owner:</strong> {this.props.car.owner}</div>
        </div>
      </li>
    );
  }
}

export default Car;
