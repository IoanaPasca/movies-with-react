import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {

    render() {
        return (
        	<div className="panel panel-default">
			  <div className="panel-heading">{this.props.movie.name}</div>
			  <div className="panel-body">
			    Year: {this.props.movie.year}
			  </div>
			</div>
        );
    }
}

export default Movie;