import React, { Component } from 'react';

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
			<div>
				<h1>Looking for a specific movie?</h1>
				<input type="text" placeholder="Search.." onInput={this.search} />
			</div>
		)
	}

}

export default Search;