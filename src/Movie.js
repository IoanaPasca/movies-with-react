import React, { Component } from 'react';

class Movie extends Component {

    render() {
        return (
           <ul>
           		<li> {this.props.movie.name} {this.props.movie.year} </li>
           </ul>
        );
    }
}

export default Movie;