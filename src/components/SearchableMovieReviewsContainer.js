import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}&query=` 

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    onChangeInput = event =>
        this.setState({ searchTerm: event.target.value })

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
            .then(json => json.json())
            .then(data => this.setState({ reviews: data.results }))
    }



    render() {
        return (
            <div className="searchable-moive-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.onChangeInput} />
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}