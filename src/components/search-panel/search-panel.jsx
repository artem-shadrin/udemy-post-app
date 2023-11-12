import React, { useState } from 'react';

import './search-panel.css'

const SearchPanel = ({ onUpdateSearch }) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
    onUpdateSearch(text);
  }

  return (
    <input
      className="form-control search-input"
      type="text"
      placeholder="Поиск по записям"
      onChange={onChange}
    />
  )
}

export default SearchPanel;