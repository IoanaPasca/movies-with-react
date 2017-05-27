import React, { Component } from 'react';
import Movie from './Movie';

class MoviesList extends Component {

	render() {
        return (
           <ul>
                {
                	this.props.movies.map((movie) =>{
                		return <Movie movie={movie} key={movie.name} />
                	})
                }
           </ul>
        );
    }
}

export default MoviesList;