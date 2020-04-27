import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCars } from '../actions';

import Car from '../components/car';
// import cars from '../data/cars';

class ListContainer extends Component {

  componentDidMount() {
    this.props.fetchCars();
  }

  render () {
    return (
      <div className="list-container">
        {this.props.cars.map((car) => {
          return(
            <Link to={`/cars/${car.id}`} key={car.id}>
              <Car key={car.id} car={car}/>
            </Link>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
