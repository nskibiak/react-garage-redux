import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/application.scss';
import Sidebar from './components/sidebar';
import ListContainer from './containers/list_container';
import CarPage from './containers/car_page';

function App() {
  return(
    <div className="view-container">
      <Sidebar />
      <ListContainer />
    </div>
  );
}

export default App;

      // <CarPage />
