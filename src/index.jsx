import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/application.scss';

import carsReducer from './reducers/cars_reducer';
import carReducer from './reducers/car_reducer';

import { reducer as formReducer } from 'redux-form';

import IndexPage from './containers/index_page';
import NewPage from './containers/new_page';
import ShowPage from './containers/show_page';

const root = document.getElementById('root')

const history = createBrowserHistory();

const reducers = combineReducers({
  cars: carsReducer,
  car: carReducer,
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
            <Route path="/" exact component={IndexPage} />
            <Route path="/new" exact component={NewPage} />
            <Route path="/cars/:id" exact component={ShowPage} />
          </div>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  root
);
