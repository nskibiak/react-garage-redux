import React, { Component } from 'react';
import Car from '../components/car';
import cars from '../data/cars';

class ListContainer extends Component {
  render () {
    return (
      <div className="list-container">
        <div className="car-details">
          <ul>
            {cars.map((car) => {
              return <Car key={car.id} car={car}/>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListContainer;
