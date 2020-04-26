import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/application.scss';
import Sidebar from './components/sidebar';

function App() {
  return(
    <div className="view-container">
      <Sidebar />
      <div className="list-container"></div>
    </div>
  );
}

export default App;
