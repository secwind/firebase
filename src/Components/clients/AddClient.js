import React, { Component } from 'react'
import { Link } from "react-router-dom";
import WithFormInputGroup from './../../HOC/WithFormInputGroup';
// import { compose } from 'redux'
// import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import PropTypes from 'prop-types'


class AddClient extends Component {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      blance: '',
      phone: '',
      
    }
    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    onSubmit = (event) => {
      event.preventDefault();

      const newState = this.state;
      const { firestore } = this.props;

      // If no blance is make 0 
        if (newState.blance === '') {
          newState.blance = 0
        };
        
      firestore.add({ collection: 'clients'}, newState)
      .then(() => this.props.history.push('/'));
    };

  render() {
    return (
      <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" />
                  Back To Dashboard
              </Link>
            </div>  
          </div>
          <div className="card mb-3">
            <div className="card-header">
              Add Client
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <WithFormInputGroup
                  lable="First Name :"
                  type="text"
                  name="firstName"
                  placeholder="firstName Enter..."
                  value={this.state.firstName}
                  minLength="2"
                  required
                  onChange={this.onChange}
                />

                <WithFormInputGroup
                  lable="Last Name :"
                  type="text"
                  name="lastName"
                  placeholder="lastName Enter..."
                  value={this.state.lastName}
                  minLength="2"
                  required
                  onChange={this.onChange}
                />

                <WithFormInputGroup
                  lable="Email :"
                  type="email"
                  name="email"
                  placeholder="Email Enter..."
                  value={this.state.email}
                  minLength="2"
                  required
                  onChange={this.onChange}
                />

                <WithFormInputGroup
                  lable="Phone :"
                  type="text"
                  name="phone"
                  placeholder="Phone Enter..."
                  value={this.state.phone}
                  minLength="10"
                  required
                  onChange={this.onChange}
                />

                <WithFormInputGroup
                  lable="Blance :"
                  type="text"
                  name="blance"
                  placeholder="Blance Enter..."
                  value={this.state.blance}
                  onChange={this.onChange}
                />
                <input type="submit" className="btn btn-primary btn-block" value="Submit"/>
              </form>
            </div>
          </div>
      </div>
    )
  }
}

    AddClient.propTypes = {
      firestore: PropTypes.object.isRequired
    }

export default firestoreConnect()(AddClient);