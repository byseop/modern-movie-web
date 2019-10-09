import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { Media, POSTER_URL_500 } from '../api/tmdb';
import { Genre } from '../api/genres';
import Swiper from 'swiper';

type MainVisualProps = {
  genres: Genre[];
};

function MainVisual({ genres }: MainVisualProps) {
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

  const renderGenre = useCallback(
    (genreId: number) => {
      return (
        <div className="genre">
          <p>{genres.filter(genre => genre.id === genreId)[0].name}</p>
        </div>
      );
    },
    [genres]
  );

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
                    <div className="media_score">
                      <i className="fas fa-star"></i>
                      <span className="vote_average">{media.vote_average}</span>
                      <span className="vote_count">({media.vote_count})</span>
                    </div>
                    <div className="media_genre">
                      {media.genre_ids.map(genre_id => renderGenre(genre_id))}
                    </div>
                    <div className="media_overview">
                      <p>{media.overview}</p>
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
