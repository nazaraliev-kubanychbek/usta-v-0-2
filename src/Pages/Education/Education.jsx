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
                <img className='education-img' src={education1} alt="Описание изображения 1" />
              </div>
              <div className="col-6">
                <div className="education-text">
                  <h2 className='education-title'>Профессиональное образование и сертификация</h2>
                  <p className='education-discription '>Мы предлагаем образовательные программы и курсы сертификации, которые помогут вам улучшить свои профессиональные навыки и открыть новые возможности для карьеры. Наши курсы ориентированы на практическое применение и актуальные требования рынка, чтобы вы могли оставаться востребованными и конкурентоспособными.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="education-content-item">
            <div className="row2">
              <div className="col-6">
                <div className="education-text">
                  <img className='education-img education-img-desk' src={education2} alt="Описание изображения 2" />
                  <h2 className=' education-title education-title-mob' >Развитие навыков и новые знания</h2>
                  <p className='education-discription education-discription-mob'>Получите необходимые знания и навыки с помощью наших обучающих программ. Мы предлагаем широкий спектр курсов, которые помогут вам расширить горизонты, повысить квалификацию и стать экспертом в своей области. Наша команда преподавателей — это профессионалы с многолетним опытом и глубокими знаниями.</p>
                </div>
              </div>
              <div className="col-6">
                <img className='education-img education-img-mob' src={education2} alt="Описание изображения 2" />
                <h2 className='education-title education-title-desk ' >Развитие навыков и новые знания</h2>
                <p className='education-discription  education-discription-desk'>Получите необходимые знания и навыки с помощью наших обучающих программ. Мы предлагаем широкий спектр курсов, которые помогут вам расширить горизонты, повысить квалификацию и стать экспертом в своей области. Наша команда преподавателей — это профессионалы с многолетним опытом и глубокими знаниями.</p>
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
                  <h2 className='education-title'>Образование, ориентированное на результат</h2>
                  <p className='education-discription '>Наши образовательные программы разработаны для того, чтобы дать вам все необходимые инструменты для достижения успеха. Мы предлагаем сертификационные курсы, которые помогут вам выделиться среди конкурентов и повысить свою квалификацию в профессиональной сфере.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="education-content-item">
            <div className="row2">
              <div className="col-6">
                <div className="education-text">
                  <img className='education-img education-img-desk' src={education4} alt="Описание изображения 2" />
                  <h2 className='education-title education-title-mob' >Повышение квалификации и профессиональный рост</h2>
                  <p className='education-discription education-discription-mob'>Программы обучения и сертификации, которые мы предлагаем, направлены на развитие профессиональных навыков и личностный рост. Получите актуальные знания и навыки, которые помогут вам добиться успеха и уверенно двигаться вверх по карьерной лестнице. Начните обучение уже сегодня!</p>
                </div>
              </div>
              <div className="col-6">
                <img className='education-img education-img-mob' src={education4} alt="Описание изображения 2" />
                <h2 className='education-title education-title-desk' >Повышение квалификации и профессиональный рост</h2>
                <p className='education-discription  education-discription-desk'>Программы обучения и сертификации, которые мы предлагаем, направлены на развитие профессиональных навыков и личностный рост. Получите актуальные знания и навыки, которые помогут вам добиться успеха и уверенно двигаться вверх по карьерной лестнице. Начните обучение уже сегодня!</p>
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
                  <h2 className='education-title' >Ваш путь к новым возможностям</h2>
                  <p className='education-discription '>Наши курсы созданы для тех, кто стремится к новым достижениям и карьерным высотам. Сертифицированные программы помогают не только улучшить знания, но и повысить вашу привлекательность на рынке труда. Откройте для себя мир возможностей с нашими образовательными курсами!</p>
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
                  <h2 className='education-title education-title-mob' >Современные навыки для современных специалистов</h2>
                  <p className=' education-discription education-discription-mob '>Мы понимаем, как важно идти в ногу со временем, поэтому наши курсы разработаны с учётом новейших трендов и технологий. Пройдите обучение и получите сертификаты, которые подтверждают вашу компетентность и готовность к решению современных задач. Будьте на шаг впереди вместе с нами!</p>
                </div>
              </div>
              <div className="col-6">
                <a href="https://m.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUO0YDQuNC60YDQvtC70Ls%3D" target="_blank" rel="noopener noreferrer">
                  <img className=' education-img education-img-mob' src={education1} alt="Описание изображения 2" />
                </a>
                <h2 className='education-title education-title-desk ' >Современные навыки для современных специалистов</h2>
                <p className='education-discription  education-discription-desk'>Мы понимаем, как важно идти в ногу со временем, поэтому наши курсы разработаны с учётом новейших трендов и технологий. Пройдите обучение и получите сертификаты, которые подтверждают вашу компетентность и готовность к решению современных задач. Будьте на шаг впереди вместе с нами!</p>
              </div>
            </div>
          </div>




        </div>








      </section >


    </div >
  );
}
   



export default Education;
