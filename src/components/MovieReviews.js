import React from 'react';

const MovieReview = (props) => {
    const reviews = props.reviews
    return (
        <div className="review-list">
            {
                reviews.map((review, index) => {
                    return(
                        <div key={review.headline} className="review">
                            <header>
                                <a className="review-link" href={review.link.url}>{review.headline}</a>
                                <br/>
                                <span className="author">{review.byline}</span>
                            </header>
                            <blockquote>{review.summary_short}</blockquote>
                        </div>   
                    )
                })
            }
        </div>
    )
}

export default MovieReview