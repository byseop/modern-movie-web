import React, { useEffect, useCallback, useState } from 'react';
import {
  Media,
  POSTER_URL_500,
  POSTER_URL_ORIGINAL,
  getVideo
} from '../api/tmdb';
import { getGenre } from '../api/genres';
import Swiper from 'swiper';
import { Link } from 'react-router-dom';

/**
 *  메인비주얼 컴포넌트
 */

const setBackground = () => {
  setTimeout(() => {
    document
      .querySelectorAll('.bg')[0]
      .setAttribute(
        'style',
        `background-image: url(${POSTER_URL_ORIGINAL}${document
          .querySelectorAll('.swiper-slide-active')[0]
          .getAttribute('data-backdrop')});`
      );
  }, 10);
};

function MainVisual({ data }: { data: Media[] }) {
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
        init: () => {
          setBackground();
        },
        slideChange: () => {
          setBackground();
        }
      }
    });
  });

  const renderGenre = useCallback(
    (genreId: number) => {
      const genres = getGenre(data[0].media_type);
      const genre = genres.filter(g => g.id === genreId);
      if (genre.length > 0) {
        return (
          <div className="genre" key={genre[0].id}>
            <p>{genre[0].name}</p>
          </div>
        );
      }
      return null;
    },
    [data]
  );
  return (
    <div className="main_visual">
      <div className="bg"></div>
      <div className="main_visual_inner">
        <div className="swiper-container main_visual_slider">
          <div className="swiper-wrapper">
            {data.map((media: Media) => (
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
      backdrop_path,
      name,
      original_name
    } = media;

    const renderTitle = useCallback(() => {
      switch (media_type) {
        case 'movie':
          return title;
        case 'tv':
          return name;
        default:
          throw new Error(
            `[title error] -> Unhandled media type "${media_type}"`
          );
      }
    }, [media_type, name, title]);
    const renderOriTitle = useCallback(() => {
      switch (media_type) {
        case 'movie':
          return original_title;
        case 'tv':
          return original_name;
        default:
          throw new Error(
            `[original_title error] -> Unhandled media type "${media_type}"`
          );
      }
    }, [media_type, original_name, original_title]);

    return (
      <div
        className="swiper-slide media_list"
        data-id={id}
        data-backdrop={backdrop_path}
      >
        <div className="media_poster">
          <Link to={`/detail/${id}`}>
            <img src={`${POSTER_URL_500}/${poster_path}`} alt={title} />
          </Link>
        </div>
        <div className="media_info">
          <div className="media_title">
            <h3>{renderTitle()}</h3>
            <h4>{renderOriTitle()}</h4>
          </div>
          <div className="media_score">
            <i className="fas fa-star"></i>
            <span className="vote_average">{vote_average * 10}%</span>
            <span className="vote_count">({vote_count})</span>
          </div>
          <div className="media_genre">
            {genre_ids.map((genre_id: number) => renderGenre(genre_id))}
          </div>
          <div className="media_overview">
            <p>{overview}</p>
          </div>
          <Video mediaType={media_type} id={id} />
        </div>
      </div>
    );
  }
);

function Video({ mediaType, id }: { mediaType: string; id: number }) {
  const [link, setLink] = useState('');
  const renderVideo = useCallback(async () => {
    const data = await getVideo(mediaType, id);
    try {
      const arr = data.results.filter(list => list.type === 'Trailer');
      if (arr[0]) {
        return setLink(arr[0].key);
      }
    } catch (e) {
      console.error(e);
    }
  }, [mediaType, id]);

  useEffect(() => {
    renderVideo();
  }, [renderVideo]);

  if (link) {
    return (
      <div className="media_trailer">
        <a
          href={`https://www.youtube.com/watch?v=${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i> 예고편
        </a>
      </div>
    );
  }
  return null;
}

export default MainVisual;
