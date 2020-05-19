import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { unmountComponentAtNode } from 'react-dom';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

        state = {
            searchTerm: '',
            reviews:[]
        }

    onChangeInput = event => 
        this.setState({searchTerm: event.target.value})
    

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL.concat(this.state.searchTerm)) // this is really too specific to be at all useful/functional. who knows the actual full titles of films?
            .then(json => json.json())
            .then(data => this.setState({reviews: data.results}))
    }

    render() {
        return (
        <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.onChangeInput}/>
                <button type="submit">Search for your fav movies' reviews</button>
            </form>
            <MovieReviews reviews={this.state.reviews}/>
        </div>
        )
    }
}