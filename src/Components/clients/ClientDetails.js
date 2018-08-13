import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import Spinner from './../_layout/Spinner'




class ClientDetails extends Component {
  render() {
      const { client } = this.props;
      if (client) {
        return (
          <div>
              <h1>{client.firstName}</h1>
          </div>
        )
      } 
      else {
        return <Spinner/>
      }

    
  }
}

export default compose(
  firestoreConnect(props =>[
    { collection: 'clients', storeAs: 'client', doc: props.match.params.doc }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
      client: ordered.client && ordered.client[0]
  }))
)(ClientDetails);
