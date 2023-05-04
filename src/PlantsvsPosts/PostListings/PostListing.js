import React from 'react';
import PostCards from '../PostCards/PostCards';
import './PostListings.css';

const PostListing = ({posts}) => {
  return (
    <div className='postListings'>
      {posts.map((post) => (
        <PostCards {...post} key={post.id}/>
      ))}
    </div>
  );
};

export default PostListing;