import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';


// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    queryList = (event) => {
        const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&`
            + `api-key=${NYT_API_KEY}`;
        event.preventDefault()

        fetch(URL)
            .then(response => response.json())
            .then(reviewData => this.setState({ reviews: reviewData.results }))

    }


    render() {
        return (
            <div>
                <form onSubmit={event => this.queryList(event)}>
                    <input id="query" name="query" type="text" onChange={event => this.handleChange(event)} value={this.state.searchTerm} />
                <button value="submit">Submit</button>
                </form>
            <div className="searchable-movie-reviews">
                {/* {console.log(this.state.reviews)} */}
                <MovieReviews reviews={this.state.reviews} />
            </div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;