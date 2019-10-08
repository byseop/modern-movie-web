import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { Media } from '../api/tmdb';
import { Swiper } from 'swiper/dist/js/swiper.esm';

function MainVisual() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.trend.trendList
  );

  if (loading) return <p className="message">로딩중</p>;
  if (error) return <p className="message">에러발생</p>;
  if (data) {
    console.log(Swiper);
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {data.results.map((media: Media) => (
            <div className="swiper-slide">{media.title}</div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}

export default MainVisual;
