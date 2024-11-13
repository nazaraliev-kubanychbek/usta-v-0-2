import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img5 from '../assets/55.png';
import img6 from '../assets/66.png';
import './styles/slider.scss';

const slides = [
  { id: 1, title: 'Преимущества для сообщества', img: img5 },
  { id: 2, title: 'Преимущества для сообщества', img: img5 },
  { id: 3, title: 'Преимущества для сообщества', img: img5 },
  { id: 4, title: 'Преимущества для сообщества', img: img5 },
  { id: 5, title: '222 col', img: img6 },
  { id: 6, title: '222 col', img: img6 },
  { id: 7, title: '222 col', img: img6 },
  { id: 8, title: '222 col', img: img6 },
  { id: 9, title: '333 col', img: img6 },
  { id: 10, title: '333 col', img: img6 },
  { id: 11, title: '333 col', img: img6 },
  { id: 12, title: '333 col', img: img6 },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const slideLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideRight = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <div className="container">
      <div className="btn-block">
        <button className="slider-button" onClick={slideLeft}>
          &lt;
        </button>
        <button className="slider-button" onClick={slideRight}>
          &gt;
        </button>
      </div>

      <div className="slider-container">
        <Swiper
          spaceBetween={20}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          breakpoints={{
            260: { slidesPerView: 1, spaceBetween: 40 },

            360: { slidesPerView: 1, spaceBetween: 20 },

            480: { slidesPerView: 1.4, spaceBetween: 20 },
            570: { slidesPerView: 1.6, spaceBetween: 20 },
            770: { slidesPerView: 2.3, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1220: {slidesPerView: 3.5, spaceBetween: 20},
            1420: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-item">
                <img src={slide.img} alt={slide.title} />
                <p className="slide-item-p">{slide.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="dots-container">
        {Array(Math.ceil(slides.length / 4))
          .fill(0)
          .map((_, dotIndex) => (
            <div
              key={dotIndex}
              className={`dot ${
                currentIndex >= dotIndex * 4 && currentIndex < (dotIndex + 1) * 4 ? 'active' : ''
              }`}
              onClick={() => swiperRef.current && swiperRef.current.slideToLoop(dotIndex * 4)}
            />
          ))}
      </div>
    </div>
  );
};

export default Slider;
