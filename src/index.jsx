import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import carsReducer from './reducers/cars_reducer';

import { reducer as formReducer } from 'redux-form';

import Sidebar from './components/sidebar';
import ListContainer from './containers/list_container';
import CarPage from './containers/car_page';

const root = document.getElementById('root')

const history = createBrowserHistory();

const reducers = combineReducers({
  cars: carsReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, {}, middlewares)}>
      <Router history={history}>
        <Switch>
          <div className="view-container">
            <Sidebar />
            <Route path="/" exact component={ListContainer} />
            <Route path="/cars/new" exact component={CarPage} />
          </div>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  root
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={createStore(reducers, {}, middlewares)}>
//       <Router history={history}>
//         <div className="thin-container">
//           <Switch>
//             <Route path="/" exact component={PostsIndex} />
//             <Route path="/posts/new" exact component={PostsNew} />
//             <Route path="/posts/:id" component={PostsShow} />
//           </Switch>
//         </div>
//       </Router>
//     </Provider>
//   </React.StrictMode>,
//   document.querySelector('.container')
// );
