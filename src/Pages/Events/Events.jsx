import React from 'react';
import './Events.scss';
import rectangleImage102 from './images/Rectangle 102.png';
import rectangleImage111 from './images/Rectangle 111.png';
import rectangleImage222 from './images/Rectangle 222.png';
import rectangleImage333 from './images/Rectangle 333.png';
import rectangleImage444 from './images/Rectangle 444.png';
import rectangleImage555 from './images/Rectangle 555.png';
import rectangleImage666 from './images/Rectangle 666.png';
import rectangleImage777 from './images/Rectangle 777.png';
import rectangleImage888 from './images/Rectangle 888.png';

const Events = () => {
  return (
    <div className='events'>
      <div className='head-images'>
        <div className='overlay'>
          <h1 className="title-header">Мероприятия</h1>
          <p className='text-header'>
            “USTA International” вдохновляет и направляет людей в сфере инженерии. Мы делаем инженерный подход понятным и привлекательным, чтобы каждый мог найти себя в этой профессии и реализоваться.
          </p>
        </div>
      </div>

      <div className='container'>
        <div className="events-container">
          <div className='event-section'>
           <div className='event-text'>
            <h1>Мероприятие</h1>
            <h2>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</h2>
           </div>
            <div className='images'>
              <li>
                <img src={rectangleImage102} alt="Rectangle 102" />
                <p>мероприятия</p>
              </li>
              <li>
                <img src={rectangleImage111} alt="Rectangle 111" />
                <p>мероприятия</p>
              </li>
              <li>
                <img src={rectangleImage222} alt="Rectangle 222" />
                <p>анонсы</p>
              </li>
              <li>
                <img src={rectangleImage222} alt="Rectangle 222" />
                <p>анонсы</p>
              </li>
            </div>
          </div>

          <div className='dots-container'>
            <div className="dot black-dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>

          <div className='key-annual-events'>
            <h1 className='key-annual-title'>Ключевые ежегодные мероприятия</h1>
            <ul className='images-1'>
              <li>
                <img src={rectangleImage444} alt="Rectangle 444" />
                <p>Как развивать карьеру</p>
              </li>
              <li>
                <img src={rectangleImage555} alt="Rectangle 555" />
                <p>Как проходить собеседования</p>
              </li>
              <li>
                <img src={rectangleImage666} alt="Rectangle 666" />
                <p>Как добиваться успеха</p>
              </li>
              <li>
                <img src={rectangleImage333} alt="Rectangle 333" />
                <p>О инженерной сфере</p>
              </li>
            </ul>
          </div>

          <div className='video-content-container'>
            <a href="https://m.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUO0YDQuNC60YDQvtC70Ls%3D" target="_blank" rel="noopener noreferrer">
              <img src={rectangleImage777} alt="Rectangle 777" className="video1" />
            </a>
            <div className='text-video1'>
              <h1 className='title-text-video1'>Lorem ipsum dolor sit amet consectetur.</h1>
              <p className='text-video22'>
                Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. 
                Praesent turpis odio rutrum platea egestas duis turpis nunc. 
                Non vitae ac risus molestie tristique molestie enim volutpat. 
                Vehicula iaculis sem velit accumsan velit.
              </p>
            </div>
          </div>

          <div className='video-content-container-2'>
            <div className='text-video2'> 
              <h1 className='title-text-video2'>Lorem ipsum dolor sit amet consectetur.</h1>
              <p className='text-video2'>
                Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. 
                Praesent turpis odio rutrum platea egestas duis turpis nunc. 
                Non vitae ac risus molestie tristique molestie enim volutpat. 
                Vehicula iaculis sem velit accumsan velit.
              </p>
            </div>
            <a href="https://m.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUO0YDQuNC60YDQvtC70Ls%3D" target="_blank" rel="noopener noreferrer">
              <img src={rectangleImage888} alt="Rectangle 888" className="video2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
