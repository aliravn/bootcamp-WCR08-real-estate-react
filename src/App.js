import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/buy" exact component={HomePage} />
          <Route path="/rent" exact component={HomePage} />
          <Route path="/sell" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={HomePage} />
          <Route path="/login" exact component={HomePage} />
          <Route component={HomePage} />
        </Switch>
        <Footer />

      </Router> 
      </div>
    );
  }
}

export default App;