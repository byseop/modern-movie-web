import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { Movie, POSTER_URL_342 } from '../api/tmdb';
import { Link } from 'react-router-dom';

function List() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.tmdb.movieList
  );
  if (loading) return <div className="message">로딩중</div>;
  if (error) return <div className="message">에러발생</div>;
  if (data) {
    if (data.results.length > 0) {
      return (
        <>
          {data.results.map((movie: Movie) => (
            <MovieList key={movie.id} movie={movie} />
          ))}
        </>
      );
    } else return <div className="message">검색 결과가 없습니다.</div>;
  }
  return null;
}

const MovieList = React.memo(({ movie }: { movie: Movie }) => {
  const {
    poster_path,
    title,
    original_title,
    vote_average,
    vote_count,
    id
  } = movie;
  return (
    <div className="movie">
      <div className="movie_poster">
        <Link to={`/detail/${id}`}>
          <picture>
            <img src={`${POSTER_URL_342}${poster_path}`} alt={title} />
          </picture>
        </Link>
      </div>
      <div className="movie_info">
        <div className="movie_title">
          <h3>{title}</h3>
          <h4>{original_title}</h4>
        </div>
        <div className="movie_score">
          <i className="fas fa-star"></i>
          <span className="vote_average">{vote_average * 10}%</span>
          <span className="vote_count">({vote_count})</span>
        </div>
      </div>
    </div>
  );
});

export default List;
