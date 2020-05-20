import React from 'react'
import Review from './Review'

const review = ({
  headline,
  display_title,
  byline,
  multimedia,
  summary_short, 
  link
}) => (
  <Review
    multimedia={multimedia}
    headline={headline}
    title={display_title}
    author={byline}
    summary={summary_short}
    link={link}
    key={headline}
  />
)

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(review)}</div>
)
      
export default MovieReviews
