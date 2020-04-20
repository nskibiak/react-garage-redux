import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

const root = document.getElementById('root')

ReactDOM.render(
  // <React.StrictMode>
  //   <Provider store={store}>
      <App />,
  //   </Provider>
  // </React.StrictMode>,
  root
);

