import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'leGcLGMIrkmWdn32SOrXofKFdEQx3asN';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

    constructor() {
        super()

        this.state = {
            reviews: []
        }
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <h2>The Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(movieReviews => {
            this.setState({
                reviews: movieReviews.results
            })
        })
    }

}

export default LatestMovieReviewsContainer
