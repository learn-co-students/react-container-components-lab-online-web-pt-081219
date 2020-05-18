import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor(props){
        super(props)
         this.state = {
             reviews: [],
             searchTerm: ''
         }
    }

    loadValues(term){
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=q0gUhgiqL06sOWe1N4ZnQBCur9f6f4Bz&query=${term}`)
        .then(res => res.json())
        .then(
            reviewData =>  this.setState({reviews: reviewData.results})
        )
       }

    handleChange = event => {
         this.setState({
             searchTerm: event.target.value
        })

    }

     handleSubmit = event => {
        alert('A name was submitted: ' + this.state.searchTerm)
        console.log(event)
        event.preventDefault()
        this.loadValues(this.state.searchTerm)
      }

    render() {
      return (
        <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                 <label>
                 Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
             </form>
             <MovieReviews reviews = {this.state.reviews} />

        </div>
      );
    }
  }
  
  export default SearchableMovieReviewsContainer;