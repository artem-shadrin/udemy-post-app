import  { useState } from 'react';

import AppHeader from '../app-header/index.jsx';
import SearchPanel from '../search-panel/index.jsx';
import PostStatusFilter from '../post-status-filter/index.jsx';
import PostList from '../post-list/index.jsx';
import PostAddForm from '../post-add-form/index.jsx';

import './app.css';

const App = () => {
  const [data, setData] = useState([
    { id: 1, label: "Lorem ipsum dolor sit amet.", important: true, like: false },
    { id: 2, label: "Lorem ipsum dolor sit amet consectetur.", important: false, like: true },
    { id: 3, label: "Lorem, ipsum dolor.", important: false, like: false }
  ])
  const [maxId, setMaxId] = useState(data.length + 1);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const deleteItem = (id) => {
    const index = data.findIndex((item) => item.id === id)
    const res = [...data.slice(0, index), ...data.slice(index + 1)];
    setData(res);
  }
  const addItem = (text) => {
    const newElement = {
      id: maxId,
      label: text,
      important: false
    }
    const newData = [...data, newElement]
    setData(newData);
    setMaxId(maxId + 1);
  }
  const likeItem = (id) => {
    const index = data.findIndex((item) => item.id === id);
    const newItem = { ...data[index], like: !data[index].like };
    const res = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    setData(res);
  }
  const importantItem = (id) => {
    const index = data.findIndex((item) => item.id === id);
    const newItem = { ...data[index], important: !data[index].important };
    const res = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    setData(res);
  }
  const searchPosts = (posts, term) => {
    if (term === "") {
      return posts;
    }
    return posts.filter(post => {
      return post.label.indexOf(term) > -1
    })
  }
  const onUpdateSearch = (term) => {
    setTerm(term);
  }
  const filterSearch = (posts, filter) => {
    switch (filter) {
      case "like":
        return posts.filter((post) => post.like)
      case "all":
        return posts;
      default:
        return posts;
    }
  }
  const onUpdateFilter = (filter) => {
    setFilter(filter);
  }

  return (
    <div className="app">
      <AppHeader
        liked={data.filter((item) => item.like).length}
        allPost={data.length} />
      <div className="search-panel d-flex">
        <SearchPanel
          onUpdateSearch={onUpdateSearch} />
        <PostStatusFilter
          filter={filter}
          onUpdateFilter={onUpdateFilter} />
      </div>
      <PostList
        posts={filterSearch(searchPosts(data, term), filter)}
        onDelete={deleteItem}
        onImportant={importantItem}
        onLike={likeItem} />
      <PostAddForm
        onAddItem={addItem} />
    </div>
  )
}

export default App;