// Code MovieReviews Here
import React from 'react'

const oneReview = ({
    headline,
    summary_short,
    mpaa_rating
}) => {
return(
    <div className="review">
        <br></br>
        Headline: {headline}<br></br>
        Summary: {summary_short}<br></br>
        MPAA Rating: {mpaa_rating}<br></br>
        <br></br>
    </div>
)
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(oneReview)}</div>

export default MovieReviews