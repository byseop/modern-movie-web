import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getMovieListThunk } from '../modules/tmdb';
import { Movie } from '../api/tmdb';
import Test from '../components/Test';

function TestContainer() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.tmdb.movieList
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getMovieListThunk('now_playing'));
  };
  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      {loading && '로딩중'}
      {error && '에러'}
      {data && data.results.map((list: Movie) => <Test title={list.title} />)}
    </div>
  );
}

export default TestContainer;
