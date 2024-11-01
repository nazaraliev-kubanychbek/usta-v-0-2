import React from 'react';
import education1 from '../Education/img/education1.png';
import education2 from '../Education/img/education2.png';
import education3 from '../Education/img/education3.png';
import education4 from '../Education/img/education4.png';

import "./Education.scss"

function Education() {
  return (
    <div className="education-page">
      <div className="education-body">
        <div className='container'>
          <h1>Образование и Сертификация</h1>
          <p>“USTA International” вдохновляет и направляет людей в сфере инженерии.
            Мы делаем инженерный подход понятным и привлекательным, чтобы каждый мог найти себя в этой профессии и реализоваться</p>
        </div>
      </div>

      <section className="education-content-section">
        <div className="container">

          <div className="education-content-item">
            <div className="row">
              <div className="col-6">
                <img src={education1} alt="Описание изображения 1" />
              </div>
              <div className="col-6">
                <div className="education-text">
                  <h2>LOREM IPSUM DOLOR SIT</h2>
                  <p className='education-title'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="education-content-item">
            <div className="row">
              <div className="col-6">
                <div className="education-text">
                  <h2>LOREM IPSUM DOLOR SIT</h2>
                  <p className='education-title'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
                </div>
              </div>
              <div className="col-6">
                <img className='education-img-2' src={education2} alt="Описание изображения 2" />
              </div>
            </div>
          </div>

          <div className="education-content-item">
            <div className="row">
              <div className="col-6">

                <img src={education3} alt="Описание изображения 3" />
              </div>
              <div className="col-6">
                <div className="education-text">
                  <h2>LOREM IPSUM DOLOR SIT</h2>
                  <p className='education-title'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="education-content-item">
            <div className="row">
              <div className="col-6">
                <div className="education-text">
                  <h2>LOREM IPSUM DOLOR SIT</h2>
                  <p className='education-title'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
                </div>
              </div>
              <div className="col-6">
                <img src={education4} alt="Описание изображения 4" />
              </div>
            </div>
          </div>

          <div className='education-video-content-container'>
            <div className="row">
              <div className="col-6">
                <a href="https://m.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUO0YDQuNC60YDQvtC70Ls%3D" target="_blank" rel="noopener noreferrer">
                  <img src={education1} alt="Rectangle 777" className="education-video1" />
                </a>
              </div>
              <div className="col-6">
                <div className='education-text-video1'>
                  <h1 className='education-title-video1'>Lorem ipsum dolor sit amet consectetur.</h1>
                  <p className='education-description-video22'>
                    Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.
                    Praesent turpis odio rutrum platea egestas duis turpis nunc.
                    Non vitae ac risus molestie tristique molestie enim volutpat.
                    Vehicula iaculis sem velit accumsan velit.
                  </p>
                </div>
              </div>
            </div>
          </div>



          <div className='education-video-content-container'>
            <div className="row">
         
              <div className="col-6">
                <div className='education-text-video1'>
                  <h1 className='education-title-video1'>Lorem ipsum dolor sit amet consectetur.</h1>
                  <p className='education-description-video22'>
                    Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.
                    Praesent turpis odio rutrum platea egestas duis turpis nunc.
                    Non vitae ac risus molestie tristique molestie enim volutpat.
                    Vehicula iaculis sem velit accumsan velit.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <a href="https://m.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUO0YDQuNC60YDQvtC70Ls%3D" target="_blank" rel="noopener noreferrer">
                  <img src={education1} alt="Rectangle 777" className="education-video1" />
                </a>
              </div>
            </div>




          </div>

        </div>

      </section >


    </div >
  );
}

export default Education;
