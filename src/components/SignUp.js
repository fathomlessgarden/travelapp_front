import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Alert, FormGroup, FormControl, HelpBlock, Button, Grid, Row, Col} from 'react-bootstrap';


// create a simple sign-in component and export
class Sign extends Component {

  constructor(props){
    super(props);
    this.state = {email: '', password: '', password_confirmation: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  onSignUp(e) {
    e.preventDefault()
    console.log(this.getValidationState())
    const formdata = this.state
    axios({
      method: 'post',
      url: 'http://localhost:3000/auth/',
      data: {
        email: formdata.email,
        password: formdata.password,
        password_confirmation: formdata.password_confirmation
      }
    })
      .then(console.log)
      .catch(this.flashError);
  }

  getValidationState() {
    const pass = this.state.password
    const passConf = this.state.password_confirmation
    if (pass.length > 0) {
      if(pass === passConf && pass.length > 8){
        return 'success'
      }
        return 'warning'
    }
    return null
  }

  handleInputChange(event) {
     const target = event.target;
     const name = target.name;
     this.setState({
       [name]: target.value
     });
  }

  flashError(error) {
    const errors = error.response.data.errors.full_messages.join(", ")
    console.log(errors)

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
              <form onSubmit={this.onSignUp}>

                <FormGroup>
                  <legend> Email Address</legend>
                  <FormControl onChange={this.handleInputChange} name= 'email' type="text" placeholder="Email" />
                 </FormGroup>

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
