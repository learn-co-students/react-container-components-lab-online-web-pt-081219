import React from 'react'

const oneReview = ({
    headline,
    byline,
    link,
    summary_short
}) => {
    return (
        <div
            key={headline}
            className="review"
        >
            <header>
                <a 
                    className="review-link" 
                    href={link.url}
                >
                    {headline}
                </a>
            </header>
        </div>
    )
}

const MovieReviews = ( props ) => <div className="review-list">

    {props.reviews.map(oneReview)}

    </div>
// SAME:
// const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;
export default MovieReviews