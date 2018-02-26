import React, { Component } from 'react';
// import Route from react-router-dom
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import SignUp from './components/SignUp';

// add routes in the App component
// it's important to use "exact path" with home
// otherwise the path "/sign" renders both the Home and the Sign components
// because "/sign" contains the "/" path
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
        <Route exact path="/" component={Home}/>
        </div>
        <div>
        <Route exact path="/sign_up" component={SignUp}/>
        </div>
      </div>
    );
  }
}

export default App;
