import './Ambassadorship.scss';
import img1 from "../Ambassadorship/imgs/Rectangle 284 (2).png";
import img2 from "../Ambassadorship//imgs/Rectangle 284.png"
import img3 from "../Ambassadorship//imgs/Rectangle 284 (1).png"
import img4 from "../Ambassadorship//imgs/Rectangle 284 (3).png"
import img5 from "../Ambassadorship//imgs/Rectangle 284 (4).png"
import img6 from "../Ambassadorship//imgs/Rectangle 284 (5).png"
import img7 from "../Ambassadorship//imgs/Rectangle 284 (6).png"
import img8 from "../Ambassadorship//imgs/Rectangle 284 (7).png"

function Ambassadorship() {
  return (
    <div>
        <div className='body1'> 
            <h1 className='body-text'>Амбассадорство</h1>
            <p className='body-title'>“USTA International” вдохновляет и направляет людей в сфере инженерии. Мы делаем инженерный подход понятным и привлекательным, чтобы каждый мог найти себя в этой профессии и реализоваться</p>
        </div>
        <div className='body-container'> 
          <div className='body-texts'>
            <a className='body-a' href="#">Реквизиты</a>
            <a className='body-a' href="#">Недвижимость</a>
            <a className='body-a' href="#">Участки</a>
            <a className='body-a' href="#">Оборудования</a>
            <a className='body-a' href="#">Техника</a>
            <a className='body-a' href="#">Коммерческие предложения</a>
            <a className='body-a' href="#">Услуги</a>
          </div>
          <div className='body-imgs'>
                <div>
                <img src={img1} alt="Описание изображения" /> 
                <p className='imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
                </div>
                <div>
                <img src={img2} alt="Описание изображения" />
                <p className='imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
                </div>
                <div>
                <img src={img3} alt="Описание изображения" />
                <p className='imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
                </div>
                <div>
                <img src={img4} alt="Описание изображения" /> 
                <p className='imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
             </div>
          </div>
              <div className='body-imgs-2'>
                <div>
                <img src={img5} alt="Описание изображения" /> 
                <p className='imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
                </div>
                <div>
                <img src={img6} alt="Описание изображения" />
                <p className='imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
                </div>
                <div>
                <img src={img7} alt="Описание изображения" />
                <p className='imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
                </div>
                <div>
                <img src={img8} alt="Описание изображения" /> 
                <p className='imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Ambassadorship;
