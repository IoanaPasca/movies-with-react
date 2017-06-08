import React, { Component } from 'react';
import './Search.css';


class Search extends Component {

	constructor() {
		super();

		this.search = this.search.bind(this);
	}

	search(event) {
		this.props.search(event.target.value);
	}

	render() {
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">
			  	<h1 className="looking">Looking for a specific movie?</h1>
				<input type="text" className="form-control" placeholder="Search.." onInput={this.search} />
			  </div>
			</div>
		)
	}

}

export default Search;