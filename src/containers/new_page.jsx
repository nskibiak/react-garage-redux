import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postCar } from '../actions';

import SidebarOther from '../components/sidebar_other';
import CarForm from '../components/car_form';
import formImage from '../assets/images/form.jpg';

class NewPage extends Component {
  submit = values => {
      this.props.postCar(values);
      this.props.history.push('/');
  }

  render() {
    return(
      <div className="view-container">
        <SidebarOther />
        <div className="form-container">
          <img className="overlay" src={formImage} alt="" />
            <CarForm onSubmit={this.submit} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postCar }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewPage);
