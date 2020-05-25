import React from 'react';

const MovieReview = (props) => {
    const reviews = props.reviews
    return (
        <div className="review-list">
            {
                reviews.map((review, index) => {
                    return <h2 key={index} className="review">{review.display_title}</h2>
                })
            }
        </div>
    )
}

export default MovieReview