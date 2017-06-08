import React, { Component } from 'react';
import Header from './../Components/Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      	<div>
      		<Header />
					<p>&nbsp;</p>
					<div className="container">
	      		<Route exact path="/" component={Home}></Route>
	      		<Route path="/about" component={About}></Route>
	      		<Route path="/contact" component={Contact}></Route>
					</div>
      	</div>
      </Router>
    );
  }
}

export default App;
