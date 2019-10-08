import React, { useEffect } from 'react';
import MainVisual from '../components/MainVisual';
import { useDispatch } from 'react-redux';
import { getTrendListThunk } from '../modules/trend';


function MainVisualContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrendListThunk('movie', 'week'));
  });

  return <MainVisual />;
}

export default MainVisualContainer;
