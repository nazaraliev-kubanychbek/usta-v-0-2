import './Participation.scss';
import img from "./imgs/Rectangle 88.png"; import img3 from "./imgs/Rectangle 88 (2).png";
import img2 from "./imgs/Rectangle 88 (1).png";  import img4 from "./imgs/Rectangle 88 (3).png";
import img5 from "./imgs/Rectangle 284 (8).png";  import img7 from "./imgs/Rectangle 284 (10).png";
import img6 from "./imgs/Rectangle 284 (9).png";  import img8 from "./imgs/Rectangle 284 (11).png";
import img10 from "./imgs/Rectangle 59 (1).png";  import right from "./imgs/slider-right.svg"
import img11 from "./imgs/Rectangle 59 (2).png";  import left from "./imgs/slider-left.svg"

function Participation() {
  return (
  <div className='Participation-container'>  
    <div className='Participation'>
      <div className="container">
      <div className='Participation-texts'>
        <div className='Participation-titles'>
          <h1 className='Participation-text'>Участие в проектах</h1>
           <p className='Participation-title'>“USTA International” вдохновляет и направляет людей в сфере инженерии. Мы делаем инженерный подход понятным и привлекательным, чтобы каждый мог найти себя в этой профессии и реализоваться</p>
          </div>
       </div>
    <div className='Participation-row-box'>
      <div className='row'>
        <div className='col-6'>
        <div className="Participation-project-card">
        <img className='Participation-img' src={img} alt="" />
        <h3 className='Participation-project-card-title'>Название проекта</h3>
        <p className='Participation-project-card-text'>О проекте-описание</p>
        </div>
        </div>
        <div className='col-6'>
        <div className="Participation-project-card">
        <img className='Participation-img' src={img2} alt="" />
        <h3 className='Participation-project-card-title'>Название проекта</h3>
        <p className='Participation-project-card-text'>О проекте-описание</p>
        </div>
        </div>
        <div className='col-6'>
        <div className="Participation-project-card">
        <img className='Participation-img' src={img3} alt="" />
        <h3 className='Participation-project-card-title'>Название проекта</h3>
        <p className='Participation-project-card-text'>О проекте-описание</p>
        </div>
        </div>
        <div className='col-6'>
        <div className="Participation-project-card">
        <img className='Participation-img' src={img4} alt="" />
        <h3 className='Participation-project-card-title'>Название проекта</h3>
        <p className='Participation-project-card-text'>О проекте-описание</p>
        </div>
        </div>
      </div>
      </div>
         <div className='Participation-gap'>
            <h3 className='Participation-gap-text'>награды за достижения в инженерной сфере</h3>
            <div className="Participation-btn">
            <img src={left} class="slider-btn-icon"></img>
            <img src={right} class="slider-btn-icon"></img>
        </div>  
          <div className="Participation-img-text">
            <div className="Participation-item">
               <img src={img5} alt="" />
               <p className='Participation-p'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
            </div>
           <div className="Participation-item">
               <img src={img6} alt="" />
               <p className='Participation-p'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
            </div>
           <div className="Participation-item">
              <img src={img7} alt="" />
              <p className='Participation-p'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
            </div>
             <div className="Participation-item">
              <img src={img8} alt="" />
              <p className='Participation-p'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
           </div>
         </div>
       </div>
       <div className="Participation-program">
      <h1 className="Participation-program-text-h3">Программы наставничества</h1>
      <div className="Participation-program-con">
      <div className="row">
        <img src={img10} alt="" className="Participation-program-img" />
        <div className="col-6">
          <h3 className="Participation-program-text">
            Стажировки и практические программы для студентов и молодых специалистов
          </h3>
          <p className="Participation-program-title">
            Мы предлагаем стажировки и практические программы для студентов и молодых специалистов, стремящихся получить ценный опыт в профессиональной среде. Участие в наших программах позволит вам работать над реальными проектами и получать наставничество от опытных сотрудников. Это отличная возможность для личного роста и начала успешной карьеры. Присоединяйтесь к нам и откройте новые горизонты для своего будущего!
          </p>
          <a className="Participation-program-link" href="#">
            Узнать подробнее
          </a>
        </div>
      </div>
      <div className="Participation-program-con">
      <div className="row">
        <div className="col-6">
          <h3 className="Participation-program-text">
            Стажировки и практические программы для студентов и молодых специалистов
          </h3>
          <p className="Participation-program-title">
            Мы предлагаем стажировки и практические программы для студентов и молодых специалистов, стремящихся получить ценный опыт в профессиональной среде. Участие в наших программах позволит вам работать над реальными проектами и получать наставничество от опытных сотрудников. Это отличная возможность для личного роста и начала успешной карьеры. Присоединяйтесь к нам и откройте новые горизонты для своего будущего!
          </p>
          <a className="Participation-program-link" href="#">
            Узнать подробнее
          </a>
        </div>
        <img src={img11} alt="" className="Participation-program-img" />
      </div>
      </div>
    </div>
    </div>
       </div>
     </div>
   </div>
  )
}

export default Participation;
