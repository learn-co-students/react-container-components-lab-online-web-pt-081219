import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearchInput = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch((URL + `&query=${this.state.searchTerm}`))
      .then(res => res.json())
      .then(data => this.setState({reviews: data.results}))

    event.currentTarget.reset()
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="search-input" onChange={this.handleSearchInput}/>
          <button type="submit">Seach</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
