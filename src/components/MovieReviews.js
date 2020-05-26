import React from 'react';

const ReviewFormatter = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div key={headline} className="review">
      <hr />
      <header>
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
    </header>
    <blockquote>{summary_short}</blockquote>
  </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
  <div className="review-list">
    {reviews.map(ReviewFormatter)}
  </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;