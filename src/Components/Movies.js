import React, { Component } from 'react';
import firebase from './../firebase';

export default class Movies extends Component {

	constructor() {
		super();
		this.state = ({
			title: '',
			source: '',
			categorie: '',
			items: []
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addMovie = (e) => {
		e.preventDefault();
		const itemRef = firebase.database().ref('items');
		const item = {
			title: this.state.title,
			source: this.state.source,
			categorie: this.state.categorie
		};
		console.log(item);
		itemRef.push(item);
		this.setState({
			title: '',
			source: '',
			categorie: ''
		})
	}

	removeMovie(itemId) {
		const itemRef = firebase.database().ref(`/items/${itemId}`);
		itemRef.remove();
	}

	componentDidMount() {
		const itemRef = firebase.database().ref('items');
		itemRef.on('value', (snapshot) => {
			let items = snapshot.val();
			let newState = [];
			for (let item in items) {
				newState.push({
					id: item,
					title: items[item].title,
					source: items[item].source,
					categorie: items[item].categorie,
				})
			}
			this.setState({
				items: newState
			})
		})
	}	

	render() {
		return (
			<div className="row">
				<div className="col-md-8">
					<form onSubmit={this.addMovie}>
						<div className="card">
							<div className="card-header"><h3>Nouvelle vidéo</h3></div>
							<div className="card-block">
								<div className="form-group row">
									<div className="col-md-2">
										<label>Titre</label>
									</div>
									<div className="col-md-10">
										<input type="text" className="form-control" name="title" placeholder="Titre de la vidéo" onChange={this.handleChange} value={this.state.title} />
									</div>
								</div>
								<div className="form-group row">
									<div className="col-md-2">
										<label>Source</label>
									</div>
									<div className="col-md-10">
										<input type="text" className="form-control" name="source" placeholder="Iframe de la vidéo" onChange={this.handleChange} value={this.state.source}/>
									</div>
								</div>
								<div className="form-group row">
									<div className="col-md-2">
										<label>Catégorie</label>
									</div>
									<div className="col-md-10">
										<select className="form-control" name="categorie" onChange={this.handleChange} value={this.state.categorie}>
								      <option value="Musique">Musique</option>
								      <option value="Buzz">Buzz</option>
								      <option value="Mdr">Mdr</option>
								      <option value="Tech">Tech</option>
								    </select>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<button className="btn btn-success btn-lg">Ajouter</button>
							</div>
						</div>
					</form>
				<p>&nbsp;</p>
				</div>
				{
					this.state.items.map((item) => {
						return (
							<div className="col-md-4" key={item.id}>
								<div className="card">
									{item.source}
									<div className="card-footer">
										<h4>{item.title}</h4>
										<button className="btn btn-danger" onClick={ () => {this.removeMovie(item.id)} }>Suprimer</button>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}