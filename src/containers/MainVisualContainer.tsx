import React, { useEffect } from 'react';
import MainVisual from '../components/MainVisual';
import { useDispatch } from 'react-redux';
import { getTrendListThunk } from '../modules/trend';
import { getGenre } from '../api/genres';
import '../css/MainVisual.css';

function MainVisualContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrendListThunk('movie', 'week'));
  });
  let genres = getGenre('movie');

  return <MainVisual genres={genres} />;
}

export default MainVisualContainer;
