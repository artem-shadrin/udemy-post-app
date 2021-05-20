import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({ posts, onDelete, onLike, onImportant }) => {

  const elements = posts.map(({ id, ...item }) => {
    return (
      <li className="list-group-item"
        key={id}>
        <PostListItem
          onDelete={() => onDelete(id)}
          onLike={() => onLike(id)}
          onImportant={() => onImportant(id)}
          {...item} />
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
