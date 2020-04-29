import React, { Component } from 'react';

import SidebarIndex from '../components/sidebar_index';
import ListContainer from '../containers/list_container';

class IndexPage extends Component {
  render() {
    return(
      <div className="view-container">
        <SidebarIndex />
        <ListContainer />
      </div>
    );
  }
}

export default IndexPage

