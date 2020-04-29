import React, { Component, Fragment } from 'react';

import SidebarIndex from '../components/sidebar_index';
import ListContainer from '../containers/list_container';

class IndexPage extends Component {
  render() {
    return(
      <Fragment>
        <SidebarIndex />
        <ListContainer />
      </Fragment>
    );
  }
}

export default IndexPage

