import React, { useState } from 'react';

import './post-add-form.css'

const PostAddForm = ({ onAddItem }) => {
  const [text, setText] = useState('');

  const onChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    onAddItem(text);
    setText('');
  }

  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="О чем вы думаете сейчас?"
        className="form-control new-post-label"
        value={text}
        onChange={onChange}
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={onSubmit}>
        Добавить</button>
    </form>
  )
}

export default PostAddForm;