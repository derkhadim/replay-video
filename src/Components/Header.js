import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
			  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <a className="navbar-brand" href="#">Marodi Clone App</a>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto pull-right">
			      <li className="nav-item active">
			        <a className="nav-link" href="#">Home</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">About</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Contact</a>
			      </li>
			    </ul>
			  </div>
			</nav>
		);
	}	
}