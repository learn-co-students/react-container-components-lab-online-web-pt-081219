import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchField from './SearchField.js'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const queryUrl = `${URL}&query=${this.state.searchTerm}`;
        fetch(queryUrl)
            .then(resp => resp.json())
            .then(json => this.setState({ reviews: json.results }))
    }

    render() {
        return(
            <div>
                <h1>Searchable Movie Reviews</h1>
                <SearchField 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    value={this.state.searchTerm}/>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;