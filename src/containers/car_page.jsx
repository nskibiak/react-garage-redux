import React, { Component, Fragment } from 'react';
import formImage from '../assets/images/form.jpg';
import CarForm from '../components/car_form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postCar } from '../actions';

class CarPage extends Component {
  submit = values => {
      // print the form values to the console
      this.props.postCar(values);
      console.log(values);
      this.props.history.push('/');
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


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postCar }, dispatch);
}

export default connect(null, mapDispatchToProps)(CarPage);

// export default CarPage

