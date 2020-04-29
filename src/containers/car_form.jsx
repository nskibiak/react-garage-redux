import React, { Component, Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import formImage from '../assets/images/form.jpg';
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

let CarForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="brand">Brand</label>
        <Field name="brand" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="model">Model</label>
        <Field name="model" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="owner">Owner</label>
        <Field name="owner" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="plate">Plate</label>
        <Field name="plate" component="input" type="text" />
      </div>
      <button type="submit">Add Car</button>
    </form>
  )
}

CarForm = reduxForm({
  // a unique name for the form
  form: 'car'
})(CarForm)

export default CarPage

