import React from 'react' 

const Review = (props) => (
  <div className='review'>
    <a href={props.link.url}><h4>{props.headline} by {props.author}</h4></a>
    <img src={props.multimedia.src} alt={props.headline}></img>
    <p>{props.summary}</p>
  </div>
)

export default Review