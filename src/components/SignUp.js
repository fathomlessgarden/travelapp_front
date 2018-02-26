import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { Alert, FormGroup, FormControl, HelpBlock, Button, Grid, Row, Col} from 'react-bootstrap';


// create a simple sign-in component and export
class SignUp extends Component {
  // component render function
  render() {
    // component return statement
    return (
      <Grid>
        <Row>
          <Col xs={12} md={5}>
            <div id='flashError'></div>
            <SignUpForm />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default SignUp
