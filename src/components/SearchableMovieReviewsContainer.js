import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'leGcLGMIrkmWdn32SOrXofKFdEQx3asN';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super();

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    onChange = (event) => {
        event.preventDefault();
        this.setState({
            searchTerm: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.fetchReviews();
    }

    fetchReviews = () => {
        fetch(URL+this.state.searchTerm)
        .then(response => response.json())
        .then(movieReviews => this.setState({ reviews: movieReviews.results }))
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews </label>
                    <input id="search-input" style={{ width: 300 }} type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.onChange}/>
                    <input type="submit"/>
                </form>
                {
                    this.state.reviews.length > 0 ? <MovieReviews reviews={this.state.reviews} /> : false
                }
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer