import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {
  const data = [
    { id: 1, label: "Lorem ipsum dolor sit amet.", important: true },
    { id: 2, label: "Lorem ipsum dolor sit amet consectetur.", important: false },
    { id: 3, label: "Lorem, ipsum dolor.", important: false }
  ]

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data}/>
      <PostAddForm />
    </div>
  )
}

export default App;