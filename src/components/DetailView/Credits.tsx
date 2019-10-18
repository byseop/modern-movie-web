import React, { useState, useEffect } from 'react';
import {
  POSTER_URL_342,
  Cast,
  Crew,
  Credit,
  getCredit,
} from '../../api/tmdb';

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

export default Credits;
