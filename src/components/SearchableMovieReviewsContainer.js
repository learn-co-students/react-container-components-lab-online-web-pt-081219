import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { reporters } from 'mocha';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleFetch = (search) => {
        fetch(URL)
        .then(resp => {return resp.json()})
        .then(json => { return json['results']})
        .then(results => {
            this.setState({reviews: results})
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.handleFetch(this.state.searchTerm)
    }

    handleChange(e) {
        this.setState({searchTerm: e.target.value})
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange.bind(this)}>
                    </input>
                    <submit>Search</submit>
                </form>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}