import React, { Component, Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import formImage from '../assets/images/form.jpg';
import CarForm from '../components/car_form';
// import { connect } from 'react-redux';
// import { createPost } from '../actions';

class CarPage extends Component {
  submit = values => {
      // print the form values to the console
      console.log(values)
    }
    render() {
      return(
        <Fragment>
          <div className="form-container">
            <img className="overlay" src={formImage} alt="" />
              <CarForm onSubmit={this.submit} />
          </div>
        </Fragment>
      );
    }
}

export default CarPage

