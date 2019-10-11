import React from 'react';
import MainVisual from '../components/MainVisual';
import { useSelector } from 'react-redux';
import { RootState } from '../modules'
import '../css/MainVisual.css';

function MainVisualContainer() {
  const { data, loading, error } = useSelector((state: RootState) => state.trend.trendList);

  if (loading) return <p className="message">로딩중</p>;
  if (error) return <p className="message">에러발생</p>;
  if (data) return <MainVisual data={data.results} />;
  return null;
}

export default MainVisualContainer;
