import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

   constructor(props){
       super(props)
        this.state = {
            reviews: []
        }
   }
   
   componentDidMount(){
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=q0gUhgiqL06sOWe1N4ZnQBCur9f6f4Bz')
    .then(res => res.json())
    .then(
        reviewData =>  this.setState({reviews: reviewData.results})
    )
   }

  render() {
    return (
      <div className="latest-movie-reviews">
          <MovieReviews reviews = {this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;