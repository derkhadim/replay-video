import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				<div className="container">
				  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <a className="navbar-brand" href="/">Marodi Clone App</a>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto pull-right">
				      <li className="nav-item active"> <Link to="/">Home</Link> </li>
				      <li className="nav-item"><Link to="/about">About</Link> </li>
				      <li className="nav-item"><Link to="/contact">Contact</Link> </li>
				    </ul>
				  </div>
				</div>
			</nav>
		);
	}	
}