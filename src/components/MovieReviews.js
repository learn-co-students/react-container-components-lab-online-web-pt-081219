import React, { Component } from 'react';


const MovieReviews = ({reviews}) => (

    <div className="review-list">
         {reviews.map(review =>
            <div className="review">
                {review.display_title}

            </div>
         )}
    </div>
    )
    
  
  export default MovieReviews;