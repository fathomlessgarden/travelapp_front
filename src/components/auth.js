import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

class Auth extends Component {

  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
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
      .then((response) => { console.log(response)})
      .catch((response) => { console.log(response)});
  }


  render() {
    return(
      <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" name='email' onChange={this.handleInputChange} placeholder="Email" />
            <FormControl type="password" name='password' onChange={this.handleInputChange} placeholder="Password" />
          </FormGroup>{' '}
          <Button bsStyle='primary' onClick={this.onSignIn} type="submit">Log In</Button>
        </Navbar.Form>
      )
  }




}




export default Auth
