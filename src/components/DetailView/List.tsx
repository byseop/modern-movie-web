import React, { useState, useEffect } from 'react';
import { Movie, POSTER_URL_342, getSimilar } from '../../api/tmdb';
import { Link } from 'react-router-dom';

function List({ id }: { id: string | number }) {
  const [data, setData] = useState();
  const [count, setCount] = useState(3);
  console.log(count);
  useEffect(() => {
    (async () => {
      const data = await getSimilar(id);
      try {
        setData(data.results.splice(0, count));
      } catch (e) {
        console.error(e);
      }
    })();
  }, [id, count]);
  if (data) {
    if (data.length > 0) {
      return (
        <>
          {data.map((movie: Movie) => (
            <MovieList key={movie.id} movie={movie} />
          ))}
          {count <= 20 ? (
            <div className="btn_more">
              <button onClick={() => setCount(count + 3)}>
                <i className="fas fa-plus"></i> 비슷한 영화 더보기
              </button>
            </div>
          ) : null}
        </>
      );
    } else return <div className="message">비슷한 영화가 없어요 ㅠ_ㅠ</div>;
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
