import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import { POSTER_URL_342, POSTER_URL_ORIGINAL, getImage, Backdrop } from '../../api/tmdb';
import mediumZoom, { Zoom } from 'medium-zoom';

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
      on: {
        slideChange: () => {
          gallery.update();
        }
      }
    });
  }, []);

  const zoom = mediumZoom({ background: 'rgba(0, 0, 0, .5)', margin: 40 });

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
                <Image
                  src={`${POSTER_URL_342}${i.file_path}`}
                  original={`${POSTER_URL_ORIGINAL}${i.file_path}`}
                  alt={name}
                  zoom={zoom}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function Image({ src, alt, zoom, original }: { src: string; alt: string; zoom: Zoom; original: string }) {
  const attachZoom = (image: any) => {
    zoom.attach(image)
  }
  return <img src={src} alt={alt} ref={attachZoom} data-zoom-src={original} />
}

export default Gallery;
