import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, FormGroup, FormControl, Button, NavDropdown, MenuItem } from 'react-bootstrap';

class Auth extends Component {

  constructor(props){
    super(props);
    this.loggedIn = function(){
      return false
      // console.log(sessionStorage.getItem('userInfo'))
      // return sessionStorage.getItem('userInfo').length > 0;
    };

    this.state = {email: '', password: '', signedIn: this.loggedIn()};
    this.handleInputChange = this.handleInputChange.bind(this);
    // bind actions to 'this'
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
    this.signInSuccess = this.signInSuccess.bind(this);
    this.signOutSuccess = this.signOutSuccess.bind(this);
  }

  handleInputChange(event) {
     const target = event.target;
     const name = target.name;
     this.setState({
       [name]: target.value
     });
  }

  onSignIn(e) {
    e.preventDefault()
    const formdata = this.state;
    axios({
      method: 'post',
      url: 'http://localhost:3000/auth/sign_in',
      data: {
        email: formdata.email,
        password: formdata.password
      }
    })
      .then(this.signInSuccess)
      .catch((response) => { console.log(response)});
  }

  onSignOut(e) {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const authHeaders = {
      'uid': userInfo['uid'],
      'client': userInfo['client'],
      'access-token': userInfo['access-token']
    };

    axios({
      method: 'delete',
      url: 'http://localhost:3000/auth/sign_out',
      headers: authHeaders,
    })
      .then(this.signOutSuccess)
      .catch((response) => { console.log(response)});
  }

 //
  signInSuccess(response) {
    this.setState({signedIn: true})
    sessionStorage.setItem('userInfo',JSON.stringify(response.headers));
  }

  signOutSuccess() {
    this.setState({signedIn: false});
    sessionStorage.setItem('userInfo','');
  };

  render() {
    // Display signedInUI or SignInForm depending on whether
    // User is signed in.
    const signedInUi = (
      <NavDropdown eventKey={3} title={this.state.email} id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Profile</MenuItem>
        <MenuItem eventKey={3.1}>My Trips</MenuItem>
        <MenuItem divider />
        <MenuItem onClick={this.onSignOut} eventKey={3.2}>Log Out</MenuItem>
        <MenuItem eventKey={3.3}>Change Password</MenuItem>
      </NavDropdown>
    )

    const signInForm = (
      <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" name='email' onChange={this.handleInputChange} placeholder="Email" />
            <FormControl type="password" name='password' onChange={this.handleInputChange} placeholder="Password" />
          </FormGroup>{' '}
          <Button bsStyle='primary' onClick={this.onSignIn} type="submit">Log In</Button>
        </Navbar.Form>
    )

    return this.state.signedIn? signedInUi : signInForm
  }
}

export default Auth
