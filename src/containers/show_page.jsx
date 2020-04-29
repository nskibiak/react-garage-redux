import React, { Component } from 'react';

import SidebarOther from '../components/sidebar_other';
import ShowWindow from '../components/show_window';

class ShowPage extends Component {
  render() {
    return(
      <div className="view-container">
        <SidebarOther />
        <ShowWindow />
      </div>
    );
  }
}

export default ShowPage

