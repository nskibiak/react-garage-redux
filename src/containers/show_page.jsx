import React, { Component } from 'react';
import { connect } from 'react-redux';

import carLogo from '../assets/images/logo_square.svg';
import { FiTrash2 } from 'react-icons/fi';
import SidebarOther from '../components/sidebar_other';

class ShowPage extends Component {
  render() {
    return(
      <div className="view-container">
        <SidebarOther />
        <div className="car-container">
          <div className="car-card">
            <img src={carLogo} alt="Car Logo" className="car-picture"/>
            <div className="car-details">
              <span>{this.props.car.brand} - {this.props.car.model}</span>
              <div className="ownerLine"><strong>Owner:</strong> {this.props.car.owner}</div>
              <div className="plate">
                {this.props.car.plate}
              </div>
              <button className="delete"><FiTrash2 /> Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const car = state.cars.find(car => car.id === idFromUrl);
  return { car };
}

export default connect(mapStateToProps, null)(ShowPage);
