import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  handleInputChange = e  => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(data => this.setState({ reviews: data.results }))
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <h3>Search for a Movie</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInputChange}/>
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
