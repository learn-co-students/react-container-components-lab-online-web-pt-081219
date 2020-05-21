// Code MovieReviews Here
import React from 'react'

const oneReview = ({
    headline,
    byline,
    link,
    summary_short
}) => {
    return (
        <div key={headline} className="review">
            <header>
                <a className="review-link" src={link}>
                    {headline}
                </a>
            </header>
        </div>
    )
}

const MovieReviews = (props) =>
    <div className="review-list">
        {props.reviews.map(oneReview)}
    </div>

export default MovieReviews