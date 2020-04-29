import React, { Component } from 'react';

import SidebarOther from '../components/sidebar_other';
import CarPage from '../containers/car_page';

class NewPage extends Component {
  render() {
    return(
      <div className="view-container">
        <SidebarOther />
        <CarPage />
      </div>
    );
  }
}

export default NewPage

