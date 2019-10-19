import React from 'react';
import { Detail, POSTER_URL_ORIGINAL, POSTER_URL_342 } from '../../api/tmdb';
import { Video } from '../MainVisual';
import Gallery from './Gallery';
import Credits from './Credits';
import Clips from './Clips';
import List from './List';

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
        <div className="clips_wrap">
          <Clips id={id} mediaType={'movie'} />
        </div>
        <div className="similar">
          <div className="similar_title">
            <h4>비슷한 영화</h4>
          </div>
          <div className="similar_wrap">
            <List id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailView;
