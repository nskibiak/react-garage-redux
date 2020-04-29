import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/application.scss';
import Sidebar from './components/sidebar';
import ListContainer from './containers/list_container';
import CarForm from './containers/car_form';

function App() {
  return(
    <div className="view-container">
      <Sidebar />
      <CarForm />
    </div>
  );
}

export default App;

      // <ListContainer />
