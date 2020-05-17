import React from 'react';

const Review = ({headline, byline, link, summary}) => {
    return (
        <div key={headline} className="review">
            <h2 className='review-link'><a href={link.url}>{headline}</a></h2>
            <h2 className="author">{byline}</h2>
            <blockquote className="summary">{summary}</blockquote>
        </div>
    )
}

const MovieReviews = ({ reviews }) => <div className='review-list'>{reviews.map(Review)}</div>  

export default MovieReviews


{/* <header>
                <a className="review-link" href={link.url}>
                    {headline}
                </a><br></br>
    
                <span className="author"> { byline } </span>
                <blockquote>{ summary }</blockquote>
            </header> */}