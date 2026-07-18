import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import prewed1 from '../assets/image/prewed (1).png';
import prewed2 from '../assets/image/prewed (2).png';
import prewed3 from '../assets/image/prewed (3).png';
import prewed4 from '../assets/image/prewed (4).png';
import prewed5 from '../assets/image/prewed (5).png';

const prewedImages = [prewed1, prewed2, prewed3, prewed4, prewed5];

const Gallery = () => {
  return (
    <div className="section-padding" style={{ overflow: 'hidden' }}>
      <div className="animate-fade-in-up" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginBottom: '2rem' }}>Galeri Cinta Kami</h2>
      </div>
      
      <div className="animate-fade-in-up" style={{ paddingBottom: '3rem' }}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="gallery-swiper"
        >
          {prewedImages.map((img, idx) => (
            <SwiperSlide key={idx} style={{ width: '80%', maxWidth: '350px' }}>
              <div className="glass-panel" style={{
                padding: '1rem',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}>
                <div style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src={img} 
                    alt={`Prewedding ${idx+1}`} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.8s ease'
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <style>{`
        .gallery-swiper {
          width: 100%;
          padding-top: 20px;
          padding-bottom: 50px;
        }
        .gallery-swiper .swiper-pagination-bullet {
          background: var(--primary-color);
          opacity: 0.5;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .gallery-swiper .swiper-slide {
          transition-property: transform, opacity;
          opacity: 0.4;
        }
        .gallery-swiper .swiper-slide-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
