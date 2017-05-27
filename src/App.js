import React, { Component } from 'react';
import MoviesList from './MoviesList';
import Search from './Search';


class App extends Component {

	constructor() {
		super();

		this.search = this.search.bind(this);

		this.state = {
			filteredMovies: this.movies
		};

	}

	movies = [{
		name : "World War Z",
		year :"2013"
	},
	{
		name:"SAlT",
		year:"2010"
	},
	{
		name:"50/50",
		year:"2011"
	},
	{
		name:"Shrek",
		year:"2001"
	},

	{
		name:"Prhometeus",
		year:"2012"
	},
	{
		name:"The Prestige",
		year:"2006"
	},
	{
		name:"A series of unfortunate events",
		year:"2014"
	},
	{
		name:"Up",
		year:"2009"
	}];

	search(input) {
		let filteredMovies = this.movies.filter((movie) => {
			return (movie.name.toLowerCase().includes(input.toLowerCase()) || movie.year.includes(input));
		});

		this.setState({ filteredMovies });
	}

    render() {

        return (
            <div>
                <p> List of movies </p>
                <Search search={this.search} />
                <MoviesList movies={this.state.filteredMovies} />
            
            </div>
        );
    }
}

export default App;
