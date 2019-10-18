import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import { POSTER_URL_342, getImage, Backdrop } from '../../api/tmdb';

function Gallery({ id, name }: { id: number; name: string }) {
  const [images, setImage] = useState();
  useEffect(() => {
    (async () => {
      const data = await getImage(id);
      try {
        setImage(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [id]);
  useEffect(() => {
    const gallery = new Swiper('.gallery_sl', {
      observer: true,
      observeParents: true,
      spaceBetween: 50,
      slidesPerView: 'auto',
      freeMode: true,
      lazy: true,
      watchSlidesVisibility: true,
      on: {
        slideChange: () => {
          gallery.update();
        }
      }
    });
  }, []);

  return (
    <div className="gallery">
      <div className="gallery_title">
        <h4>갤러리</h4>
      </div>
      <div className="gallery_sl swiper-container">
        <div className="swiper-wrapper">
          {images &&
            images.backdrops.map((i: Backdrop) => (
              <div className="swiper-slide" key={i.file_path}>
                <img
                  src={`${POSTER_URL_342}${i.file_path}`}
                  alt={name}
                  className="swiper-lazy"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
