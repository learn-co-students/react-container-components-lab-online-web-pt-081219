import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'leGcLGMIrkmWdn32SOrXofKFdEQx3asN';

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
        const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `query=${this.state.searchTerm}&`
            + `api-key=${NYT_API_KEY}`;
        fetch(URL)
            .then(response => response.json())
            .then(movieReviews => this.setState({ reviews: movieReviews.results }))
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.onChange}/>
                    <input type="submit"/>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    componentDidMount() {
        this.fetchReviews()
    }

}

export default SearchableMovieReviewsContainer