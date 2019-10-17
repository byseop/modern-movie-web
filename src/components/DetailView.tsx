import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import {
  Detail,
  POSTER_URL_ORIGINAL,
  POSTER_URL_342,
  Cast,
  Crew,
  Credit,
  getCredit,
  getImage,
  Images,
  Backdrop
} from '../api/tmdb';
import { Video } from './MainVisual';

function DetailView({ data }: { data: Detail; getCredit: any }) {
  const {
    backdrop_path,
    title,
    original_title,
    tagline,
    release_date,
    poster_path,
    vote_average,
    vote_count,
    homepage,
    genres,
    id,
    overview,
    runtime,
    spoken_languages
  } = data;

  return (
    <div className="detail_wrap">
      <div className="visual">
        <picture>
          <img
            className="backdrop"
            src={`${POSTER_URL_ORIGINAL}${backdrop_path}`}
            alt={title}
          />
        </picture>
      </div>
      <div className="detail_contents">
        <div className="detail_title">
          <h2>
            {title} <span>({release_date.split('-')[0]})</span>
          </h2>
          <h3>{original_title}</h3>
          <p>{tagline}</p>
        </div>
        <div className="detail_info">
          <div className="detail_poster">
            <div className="detail_poster_inner">
              <picture>
                <img src={`${POSTER_URL_342}${poster_path}`} alt={title} />
              </picture>
            </div>
            <Video mediaType={'movie'} id={id} />
          </div>
          <div className="detail_list_wrap">
            <div className="detail_info_top">
              <div className="detail_subtitle">
                <h2>{title}</h2>
                <p>
                  <i className="fas fa-star"></i>{' '}
                  <span>{vote_average * 10}%</span> <span>({vote_count})</span>
                </p>
                <p>
                  <i className="fas fa-calendar-day"></i>{' '}
                  <span>{release_date}</span>
                </p>
                <p>
                  <i className="fas fa-clock"></i> <span>{runtime}분</span>
                </p>
                {spoken_languages.map(l => (
                  <p key={l.name}>
                    <i className="fas fa-language"></i> <span>{l.name}</span>
                  </p>
                ))}
              </div>
              <div className="right">
                <p>
                  <a href={homepage} rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-link"></i> Homepage
                  </a>
                </p>
                <div className="genre_wrap">
                  {genres.map(genre => (
                    <div className="genre" key={genre.id}>
                      {genre.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="detail_info_mid">
              <Credits id={id} />
            </div>
            <div className="story_line">
              <div className="story_title">
                <h4>줄거리</h4>
                <div className="story_text">
                  <h5>{tagline}</h5>
                  <p>{overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery_wrap">
          <Gallery id={id} name={title} />
        </div>
      </div>
    </div>
  );
}

function Credits({ id }: { id: number }) {
  const [casts, setCasts] = useState();
  const [crews, setCrews] = useState();
  const [count, setCount] = useState(5);

  useEffect(() => {
    getCredit(id).then((value: Credit) => {
      setCasts(value.cast.splice(0, count));
      setCrews(value.crew.splice(0, count));
    });
  }, [count, id]);

  return (
    <>
      <div className="credit_wrap">
        <div className="credit">
          <div className="credit_title">상세</div>
          <div className="crews_wrap">
            {crews &&
              crews.map((crew: Crew) => (
                <div className="crew" key={crew.credit_id}>
                  <div className="crew_position">
                    <h5>{crew.job}</h5>
                  </div>
                  <div className="crew_name">
                    <p>{crew.name}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="credit">
          <div className="credit_title">출연</div>
          <div className="casts_wrap">
            {casts &&
              casts.map((cast: Cast) => (
                <div className="cast" key={cast.credit_id}>
                  <div className="cast_profile">
                    <picture>
                      <img
                        src={`${POSTER_URL_342}${cast.profile_path}`}
                        alt={cast.name}
                      />
                    </picture>
                  </div>
                  <div className="cast_info">
                    <div className="cast_position">
                      <h5>{cast.name}</h5>
                    </div>
                    <div className="cast_name">
                      <p>{cast.character}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="btn_more">
        <button type="button" onClick={() => setCount(count + 5)}>
          <i className="fas fa-plus"></i> 더 보기
        </button>
      </div>
    </>
  );
}

function Gallery({ id, name }: { id: number; name: string }) {
  const [images, setImage] = useState();
  useEffect(() => {
    new Swiper('.gallery_sl', {
      observer: true,
      observeParents: true,
      spaceBetween: 50,
      slidesPerView: 'auto',
      freeMode: true,
      autoHeight: true
    });
  }, []);
  useEffect(() => {
    getImage(id).then((value: Images) => setImage(value));
  }, [id]);

  return (
    <div className="gallery">
      <div className="gallery_title"><h4>갤러리</h4></div>
      <div className="gallery_sl swiper-container">
        <div className="swiper-wrapper">
          {images && images.backdrops.map((i: Backdrop) => (
            <div className="swiper-slide" key={i.file_path}>
              <img src={`${POSTER_URL_342}${i.file_path}`} alt={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailView;
