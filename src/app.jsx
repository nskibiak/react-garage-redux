import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/application.scss';
import Sidebar from './components/sidebar';
import ListContainer from './containers/list_container';
import CarForm from './containers/new_car';

function App() {
  return(
    <div className="view-container">
      <Sidebar />
      <ListContainer />
      <CarForm />
    </div>
  );
}

export default App;

