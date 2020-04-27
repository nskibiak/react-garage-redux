import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Car from '../components/car';
import cars from '../data/cars';

class ListContainer extends Component {
  render () {
    return (
      <div className="list-container">
        {cars.map((car) => {
          return(
            <Link to={`/cars/${car.id}`}>
              <Car key={car.id} car={car}/>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default ListContainer;
