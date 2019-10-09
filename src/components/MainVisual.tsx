import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { Media, POSTER_URL_500 } from '../api/tmdb';
import Swiper from 'swiper';

function MainVisual() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.trend.trendList
  );

  useEffect(() => {
    new Swiper('.main_visual_slider', {
      observer: true,
      observeParents: true,
      loop: true,
      spaceBetween: 100,
      centeredSlides: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 45,
        slideShadows: false
      }
    });
  });

  if (loading) return <p className="message">로딩중</p>;
  if (error) return <p className="message">에러발생</p>;
  if (data) {
    return (
      <div className="main_visual">
        <div className="main_visual_inner">
          <div className="bg"></div>
          <div className="swiper-container main_visual_slider">
            <div className="swiper-wrapper">
              {data.results.map((media: Media) => (
                <div className="swiper-slide media_list" key={media.id}>
                  <div className="media_poster">
                    <img
                      src={`${POSTER_URL_500}/${media.poster_path}`}
                      alt={media.title}
                    />
                  </div>
                  <div className="media_info">
                    <div className="media_title">
                      <h3>{media.title}</h3>
                      <h4>{media.original_title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default MainVisual;
