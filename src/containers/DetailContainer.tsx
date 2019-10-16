import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieThunk } from '../modules/detail';
import Detail from '../components/DetailView';
import { RootState } from '../modules';
import '../css/Detail.css';
import { getCredit } from '../api/tmdb';

interface match {
  params: {
    movie_id: string;
  };
  isExact: boolean;
  path: string;
  url: string;
}

function DetailContainer({ match }: { match: match }) {
  const { movie_id } = match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieThunk(movie_id));
  }, [dispatch, movie_id]);
  const { data, loading, error } = useSelector((state: RootState) => state.detail.detail);
  if (loading) return <div className="message">로딩중</div>
  if (error) return <div className="message">에러발생</div>
  if (data) return <Detail data={data} getCredit={getCredit} />;
  return null
}

export default DetailContainer;
