import React, { useState } from 'react';
import List from '../components/List';
import '../css/List.css';
import ListHeaderContainer from './ListHeaderContainer';
import { useDispatch } from 'react-redux';
import { getMovieListThunk } from '../modules/tmdb';

function ListContainer() {
  return (
    <div className="list_inner">
      <div className="list_nav">
        <ListHeaderContainer />
        <Input />
      </div>
      <div className="list_wrap">
        <List />
      </div>
    </div>
  );
}

function Input() {
  const dispatch = useDispatch();
  const searchMovie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getMovieListThunk(query, true));
  };
  const [query, setQuery] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div className="search_form">
      <form onSubmit={searchMovie}>
        <input
          type="text"
          placeholder="검색"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default ListContainer;
