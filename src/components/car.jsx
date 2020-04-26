import React, { Component } from 'react';
import carLogo from '../assets/images/logo_square.svg';

class Car extends Component {
  render () {
    return (
      <li className="car-smallad">
        <img src={carLogo} alt="Car Logo" className="car-logo"/>
        <h1>{this.props.car.brand}</h1>
      </li>
    );
  }
}

export default Car;
