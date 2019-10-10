import React, { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  Media,
  POSTER_URL_500,
  POSTER_URL_ORIGINAL,
  getVideo
} from '../api/tmdb';
import { Genre } from '../api/genres';
import Swiper from 'swiper';

/**
 *  메인비주얼 컴포넌트
 */
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
      },
      slideToClickedSlide: true,
      on: {
        slideChange: () => {
          const backdrop = document
            .querySelectorAll('.swiper-slide-active')[0]
            .getAttribute('data-backdrop');
          document
            .querySelectorAll('.bg')[0]
            .setAttribute(
              'style',
              `background-image: url(${POSTER_URL_ORIGINAL}${backdrop});`
            );
        }
      }
    });
  });

  const renderGenre = useCallback(
    (genreId: number) => {
      const genre = genres.filter(g => g.id === genreId);
      return (
        <div className="genre" key={genre[0].id}>
          <p>{genre[0].name}</p>
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
        <div className="bg"></div>
        <div className="main_visual_inner">
          <div className="swiper-container main_visual_slider">
            <div className="swiper-wrapper">
              {data.results.map((media: Media) => (
                <MainVisualList
                  key={media.id}
                  media={media}
                  renderGenre={renderGenre}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

/**
 *  메인비주얼 리스트 컴포넌트
 */
type MainVisualListProps = {
  media: Media;
  renderGenre: any;
};

const MainVisualList = React.memo(
  ({ media, renderGenre }: MainVisualListProps) => {
    const {
      id,
      title,
      poster_path,
      original_title,
      vote_average,
      vote_count,
      genre_ids,
      overview,
      media_type,
      backdrop_path
    } = media;

    const [video, setVideo] = useState('');
    const renderVideo = useCallback((mediaType: string, id: number) => {
      getVideo(mediaType, id).then(value => {
        const data = value.results.filter(list => list.type === 'Trailer');
        if (data[0]) {
          return setVideo(data[0].key);
        }
        return null;
      });
    }, []);
    useEffect(() => {
      renderVideo(media_type, id);
    });

    return (
      <div
        className="swiper-slide media_list"
        data-id={id}
        data-backdrop={backdrop_path}
      >
        <div className="media_poster">
          <img src={`${POSTER_URL_500}/${poster_path}`} alt={title} />
        </div>
        <div className="media_info">
          <div className="media_title">
            <h3>{title}</h3>
            <h4>{original_title}</h4>
          </div>
          <div className="media_score">
            <i className="fas fa-star"></i>
            <span className="vote_average">{vote_average}</span>
            <span className="vote_count">({vote_count})</span>
          </div>
          <div className="media_genre">
            {genre_ids.map((genre_id: number) => renderGenre(genre_id))}
          </div>
          <div className="media_overview">
            <p>{overview}</p>
          </div>
          {video ? (
            <div className="media_trailer">
              <a
                href={`https://www.youtube.com/watch?v=${video}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> 예고편 감상하기
              </a>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

export default MainVisual;
