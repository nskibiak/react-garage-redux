import React from 'react';
import { reduxForm, Field } from 'redux-form';

let CarForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="brand">Brand</label>
        <Field className="form-control" name="brand" component="input" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="model">Model</label>
        <Field className="form-control" name="model" component="input" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="owner">Owner</label>
        <Field className="form-control" name="owner" component="input" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="plate">Plate</label>
        <Field className="form-control" name="plate" component="input" type="text" />
      </div>
      <button type="submit">Add Car</button>
    </form>
  )
}

CarForm = reduxForm({
  // a unique name for the form
  form: 'car'
})(CarForm)

export default CarForm

