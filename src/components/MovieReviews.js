import React from 'react'

const MovieReviews = ({ reviews }) => {
    const movieEls = reviews.map((m, i) => {
        return (
            <li key={i} className="review">
                <a href={m.link.url} target="_blank">
                    {m.display_title}
                </a>
            </li>
        )
    });

    return (
        <div className="review-list">
            {movieEls}
        </div>
    );
}

export default MovieReviews;