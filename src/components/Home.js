import React, { Component } from 'react';
import Trip from './Trip';
import { Col } from 'react-bootstrap';


// create a simple Home component and export
class Home extends Component {

  // component render function
  render() {

    // component return statement
    return (
      <Col xs={8} md={5}>
        <Trip />
      </Col>
    )
  }
}

export default Home
