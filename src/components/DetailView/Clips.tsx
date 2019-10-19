import React, { useState, useEffect, useCallback } from 'react';
import { getVideo, Video } from '../../api/tmdb';
import Swiper from 'swiper';

function Clips({ mediaType, id }: { mediaType: string; id: number }) {
  const [clips, setClips] = useState();
  const renderVideo = useCallback(async () => {
    const data = await getVideo(mediaType, id);
    try {
      const arr = data.results.filter(list => list.site === 'YouTube');
      if (arr) {
        return setClips(arr);
      }
    } catch (e) {
      console.error(e);
    }
  }, [mediaType, id]);

  useEffect(() => {
    renderVideo();
  }, [renderVideo]);

  useEffect(() => {
    new Swiper('.clips_sl', {
      observer: true,
      observeParents: true,
      slidesPerView: 3.2,
      freeMode: true,
      spaceBetween: 50
    });
  }, []);

  return (
    <div className="clips">
      <div className="clips_title">
        <h4>클립</h4>
      </div>
      <div className="clips_sl swiper-container">
        <div className="swiper-wrapper">
          {clips && clips.length > 0 ? (
            clips.map((c: Video) => (
              <div className="swiper-slide" key={c.id}>
                <a
                  href={`https://www.youtube.com/watch?v=${c.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play-circle"></i>
                  <img
                    src={`https://img.youtube.com/vi/${c.key}/hqdefault.jpg`}
                    alt={c.name}
                  />
                </a>
                <p>{c.name}</p>
              </div>
            ))
          ) : (
            <p className="message">클립이 없어요 ㅠ_ㅠ</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Clips;
