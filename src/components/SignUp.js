import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Alert, FormGroup, FormControl, HelpBlock, Button, Grid, Row, Col} from 'react-bootstrap';


// create a simple sign-in component and export
class Sign extends Component {

// Constructor function is first thing that is called when component renders
  constructor(props){
    super(props);
    // Set States for form data that will be updated and evetually passed
    // to the API
    this.state = {email: '', password: '', password_confirmation: ''};

    // {bind this to functions so that "this" in the}
    // {bound functions includes this.state properties.}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  onSignUp(e) {
    // prevent form submmital
    e.preventDefault()
    // set formdata to properties of this.state
    const formdata = this.state
    // use axios gem to send API request
    axios({
      method: 'post',
      url: 'http://localhost:3000/auth/',
      data: {
        email: formdata.email,
        password: formdata.password,
        password_confirmation: formdata.password_confirmation
      }
    })
    // Log response if successfull, otherwise pass error to flashError
      .then(console.log)
      .catch(this.flashError);
  }

  // Changes validation css/html for form fields
  // based on status of validation
  getValidationState() {
    // checks length and equivalence of pass/pass_confirmation
    const pass = this.state.password
    const passConf = this.state.password_confirmation
    // begin to display validation state as user types
    if (pass.length > 0) {
      // once user pass is longer than 8 chars and matches passConf
      // change state to 'success'
      if(pass === passConf && pass.length > 8){
        return 'success'
      }
        return 'warning'
    }
    return null
  }

  // set state for given form input field.
  handleInputChange(event) {
     const target = event.target;
     const name = target.name;
     this.setState({
       [name]: target.value
     });
  }

  // Displays error message returned by API Call in the
  // Flasherror element.
  flashError(error) {
    const errors = error.response.data.errors.full_messages.join(", ")
    const errorelm = (
      <Alert bsStyle="danger">
      <p> {errors} </p>
      </Alert>
    );
    ReactDOM.render(errorelm, document.getElementById('flashError'))
  }


  // component render function
  render() {
    // component return statement
    return (
      <Grid>
        <Row>
          <Col xs={12} md={5}>
            <div id='flashError'></div>
            <div className='sign_up'>
            {/*on submit call onSignUp*/}
              <form onSubmit={this.onSignUp}>
                <FormGroup>
                  <legend> Email Address</legend>
            {/* When value changes set this.state property via handleInputChange */}
                  <FormControl onChange={this.handleInputChange} name= 'email' type="text" placeholder="Email" />
                 </FormGroup>
            {/* Validation State scope is limited to password input fields */}
                 <FormGroup validationState={this.getValidationState()}>
                   <legend> Password </legend>
                   <FormControl onChange={this.handleInputChange} name= 'password' type="password" placeholder="Password" />
                   <FormControl onChange={this.handleInputChange} name='password_confirmation' type="password" placeholder="Password Confirmation" />
                   <FormControl.Feedback />
                   <HelpBlock> Password must be longer than 8 characters. </HelpBlock>
                   <Button bsStyle='success' type='submit'> Sign Up </Button>
                 </FormGroup>

              </form>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Sign
