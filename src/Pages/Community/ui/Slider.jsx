import React, { useState } from 'react';
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
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerRow = 4; 
  const totalRows = 1;   // Общее количество строк
  const itemsPerPage = itemsPerRow * totalRows; // Элементы на странице

  const slideLeft = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex >= 0 ? newIndex : Math.max(slides.length - itemsPerPage, 0); // Убедитесь, что не выходим за пределы
    });
  };

  const slideRight = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex < slides.length ? newIndex : 0; // Вернуться к началу, если вышли за пределы
    });
  };

  const handleDotClick = (dotIndex) => {
    setStartIndex(dotIndex * itemsPerPage);
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
        <div className="slider">
          {[...Array(totalRows)].map((_, rowIndex) => (
            <div className="slide-row" key={rowIndex}>
              {slides
                .slice(startIndex + rowIndex * itemsPerRow, startIndex + rowIndex * itemsPerRow + itemsPerRow)
                .map((slide) => (
                  <div className="slide-item" key={slide.id}>
                    <img src={slide.img} alt={slide.title} />
                    <p className="slide-item-p">{slide.title}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className="slider-container">
        <div className="slider">
          {[...Array(totalRows)].map((_, rowIndex) => (
            <div className="slide-row" key={rowIndex}>
              {slides
                .slice(startIndex + rowIndex * itemsPerRow, startIndex + rowIndex * itemsPerRow + itemsPerRow)
                .map((slide) => (
                  <div className="slide-item" key={slide.id}>
                    <img src={slide.img} alt={slide.title} />
                    <p className="slide-item-p">{slide.title}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="dots-container">
        {Array(Math.ceil(slides.length / itemsPerPage)).fill(0).map((_, dotIndex) => (
          <div 
            key={dotIndex}
            className={`dot ${Math.floor(startIndex / itemsPerPage) === dotIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
};




export default Slider;
