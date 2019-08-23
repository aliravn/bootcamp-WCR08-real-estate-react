import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Navigation />
        <Header />



      </Router> 
      </div>
    );
  }
}

export default App;

