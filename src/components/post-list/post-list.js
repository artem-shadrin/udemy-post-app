import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({ posts }) => {

  const elements = posts.map(({ id, ...item}) => {
    return (
      <li className="list-group-item"
        key={id}>
        <PostListItem {...item} />
      </li>
    )
  });
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList;
