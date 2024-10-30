import './Participation.scss';
import img from "./imgs/Group 173.png"; import img3 from "./imgs/Group 175.png";
import img2 from "./imgs/Group 174.png";  import img4 from "./imgs/Group 176.png";
import img5 from "./imgs/Rectangle 284 (8).png";  import img7 from "./imgs/Rectangle 284 (10).png";
import img6 from "./imgs/Rectangle 284 (9).png";  import img8 from "./imgs/Rectangle 284 (11).png";
import img10 from "./imgs/Rectangle 59 (1).png";  import right from "./imgs/slider-right.svg"
import img11 from "./imgs/Rectangle 59 (2).png";  import left from "./imgs/slider-left.svg"

function Participation() {
  return (
  <div className='Participation-container'>  
    <div className='Participation'>
      <div className='Participation-texts'>
        <div className='Participation-titles'>
          <h1 className='Participation-text'>Участие в проектах</h1>
           <p className='Participation-title'>“USTA International” вдохновляет и направляет людей в сфере инженерии. Мы делаем инженерный подход понятным и привлекательным, чтобы каждый мог найти себя в этой профессии и реализоваться</p>
          </div>
       </div>
      <div className='Participation-imgs'>
         <img className='Participation-img' src={img} alt="" />
           <img className='Participation-img' src={img2} alt="" />
          <img className='Participation-img' src={img3} alt="" />
         <img className='Participation-img' src={img4} alt="" />
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
        <h1 className='Participation-program-text'>программы наставничества</h1>
          <div className='Participation-program-img'>
           <img src={img10} alt="" />
          </div>
          <div className='Participation-program-texts'>
            <h3 className='Participation-program-text'>Стажировки и практические программах для студентов и молодых специалистов</h3>
               <p className='Participation-program-title'>Мы предлагаем стажировки и практические программы для студентов и молодых специалистов, стремящихся получить ценный опыт в профессиональной среде. Участие в наших программах позволит вам работать над реальными проектами и получать наставничество от опытных сотрудников. Это отличная возможность для личного роста и начала успешной карьеры. Присоединяйтесь к нам и откройте новые горизонты для своего будущего!</p>
              <a className='Participation-program-link' href="#">Узнать подробнее</a>
           </div>
          <div className='Participation-program-img'>
            <div className='Participation-program-titles'>
              <h3 className='Participation-program-text'>Стажировки и практические программах для студентов и молодых специалистов</h3>
              <p className='Participation-program-title'>Мы предлагаем стажировки и практические программы для студентов и молодых специалистов, стремящихся получить ценный опыт в профессиональной среде. Участие в наших программах позволит вам работать над реальными проектами и получать наставничество от опытных сотрудников. Это отличная возможность для личного роста и начала успешной карьеры. Присоединяйтесь к нам и откройте новые горизонты для своего будущего!</p>
              <a className='Participation-program-link' href="#">Узнать подробнее</a>
            </div>
           <img className='Participation-program-imgs' src={img11} alt="" />
         </div>
       </div>
     </div>
   </div>
  )
}

export default Participation;
