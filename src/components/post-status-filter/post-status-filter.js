import React, { useState } from 'react';

import './post-status-filter.css'

const PostStatusFilter = ({ filter, onUpdateFilter }) => {
  const [buttons] = useState([
    { name: "all", value: "Все" },
    { name: "like", value: "Понравилось" }]);

  const btnElements = buttons.map(({ name, value }) => {
    const active = filter === name;
    const clazz = active ? 'btn-info' : 'btn-outline-secondary';
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => onUpdateFilter(name)}>
        {value}
      </button>
    )
  })
  return (
    <div className="btn-group">
      {btnElements}
    </div>
  )
}

export default PostStatusFilter;