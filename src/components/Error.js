import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { Alert, Button } from 'react-bootstrap';

// create a simple sign-in component and export
class Error extends Component {
  // component render function
  render() {
    // E6 deconstruction - this creates a new variable called errorMessage
    // from this.props.errorMessage
    const { errorMessage } = this.props
    // component return statement
    return (
      <Alert bsStyle="danger">
        <ul> { errorMessage } </ul>
      </Alert>
    )
  }
}

export default Error
