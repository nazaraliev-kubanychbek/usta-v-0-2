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
          <h1>ОБРАЗОВАНИЕ И СЕРТИФИК</h1>
          <p>“USTA International” вдохновляет и направляет людей в сфере инженерии.
            Мы делаем инженерный подход понятным и привлекательным, чтобы каждый мог найти себя в этой профессии и реализоваться</p>
        </div>
      </div>
      <section className="education-content-section">
        <div className="container">

          <div className="education-content-item">
            <div className="row2">
              <div className="col-6">
                <img  className='education-img'src={education1} alt="Описание изображения 1" />
              </div>
              <div className="col-6">
                <div className="education-text">
                  <h2 className='education-title'>LOREM IPSUM DOLOR SIT</h2>
                  <p className='education-discription '>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="education-content-item">
            <div className="row2">
              <div className="col-6">
                <div className="education-text">
                  <img className='education-img education-img-desk' src={education2} alt="Описание изображения 2" />
                  <h2 className=' education-title education-title-mob' >LOREM IPSUM DOLOR SIT</h2>
                  <p className='education-discription education-discription-mob'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
                </div>
              </div>
              <div className="col-6">
                <img className='education-img education-img-mob' src={education2} alt="Описание изображения 2" />
                <h2 className='education-title education-title-desk ' >LOREM IPSUM DOLOR SIT</h2>
                <p className='education-discription  education-discription-desk'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
              </div>

            </div>
          </div>




          <div className="education-content-item">
            <div className="row2">
              <div className="col-6">
                <img className='education-img' src={education3} alt="Описание изображения 3" />
              </div>
              <div className="col-6">
                <div className="education-text">
                  <h2 className='education-title'>LOREM IPSUM DOLOR SIT</h2>
                  <p className='education-discription '>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
                </div>
              </div>

            </div>
          </div>




          <div className="education-content-item">
            <div className="row2">
              <div className="col-6">
                <div className="education-text">
                  <img className='education-img education-img-desk' src={education4} alt="Описание изображения 2" />
                  <h2 className='education-title education-title-mob' >LOREM IPSUM DOLOR SIT</h2>
                  <p className='education-discription education-discription-mob'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
                </div>
              </div>
              <div className="col-6">
                <img className='education-img education-img-mob' src={education4} alt="Описание изображения 2" />
                <h2 className='education-title education-title-desk' >LOREM IPSUM DOLOR SIT</h2>
                <p className='education-discription  education-discription-desk'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
              </div>

            </div>
          </div>



          <div className="education-content-item">
            <div className="row2">
              <div className="col-6">
                <a href="https://m.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUO0YDQuNC60YDQvtC70Ls%3D" target="_blank" rel="noopener noreferrer">
                  <img className='education-img' src={education1} alt="Описание изображения 1" />
                </a>

              </div>
              <div className="col-6">
                <div className="education-text">
                  <h2 className='education-title' >LOREM IPSUM DOLOR SIT</h2>
                  <p className='education-discription '>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="education-content-item">
            <div className="row2">
              <div className="col-6">
                <div className="education-text">
                <a href="https://m.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUO0YDQuNC60YDQvtC70Ls%3D" target="_blank" rel="noopener noreferrer">
                  <img className='education-img education-img-desk' src={education1} alt="Описание изображения 2" />
                  </a>
                  <h2 className='education-title education-title-mob' >LOREM IPSUM DOLOR SIT</h2>
                  <p className=' education-discription education-discription-mob '>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
                </div>
              </div>
              <div className="col-6">
              <a href="https://m.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUO0YDQuNC60YDQvtC70Ls%3D" target="_blank" rel="noopener noreferrer">
                <img className=' education-img education-img-mob' src={education1} alt="Описание изображения 2" />
                </a>
                <h2 className='education-title education-title-desk ' >LOREM IPSUM DOLOR SIT</h2>
                <p className='education-discription  education-discription-desk'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit.</p>
              </div>

            </div>
          </div>




        </div>








      </section >


    </div >
  );
}

export default Education;
