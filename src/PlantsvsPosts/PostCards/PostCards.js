import React from 'react';
import './PostCards.css'

const PostCards = (props) => {
  
  const {id, img, postDate, title1, title2, info} = props
  
  return (
    <div className='post' key={id}>
      <img src={img}/>
      <div className='post-info'>
        <span>{postDate}</span>
        <div className='title'>
          <h2>{title1}</h2>
          <h2>{title2}</h2>
        </div>
        <p>{info}</p>
        <button>Read More <i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default PostCards;