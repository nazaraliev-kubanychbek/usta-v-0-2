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
      <div className='Ambassadorship'> 
          <h1 className='Ambassadorship-text'>Амбассадорство</h1>
          <p className='Ambassadorship-title'>“USTA International” вдохновляет и направляет людей в сфере инженерии. Мы делаем инженерный подход понятным и привлекательным, чтобы каждый мог найти себя в этой профессии и реализоваться</p>
      </div>
        <div className='Ambassadorship-container'> 
          <div className='Ambassadorship-texts'>
          <a className='Ambassadorship-link' href="#">Реквизиты</a>
          <a className='Ambassadorship-link' href="#">Недвижимость</a>
          <a className='Ambassadorship-link' href="#">Участки</a>
          <a className='Ambassadorship-link' href="#">Оборудования</a>
          <a className='Ambassadorship-link' href="#">Техника</a>
          <a className='Ambassadorship-link' href="#">Коммерческие предложения</a>
          <a className='Ambassadorship-link' href="#">Услуги</a>
          </div>
        <div className='Ambassadorship-imgs'>
        <div>
        <img src={img1} alt="Описание изображения" /> 
        <p className='Ambassadorship-imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
        </div>
          <div>
          <img src={img2} alt="Описание изображения" />
          <p className='Ambassadorship-imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
          </div>
            <div>
            <img src={img3} alt="Описание изображения" />
            <p className='Ambassadorship-imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
            </div>
              <div>
              <img src={img4} alt="Описание изображения" /> 
              <p className='Ambassadorship-imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
              </div>
        </div>
          <div className='Ambassadorship-imgs-alt'>
            <div>
            <img className='Ambassadorship-imgs-alt-img' src={img5} alt="Описание изображения" /> 
            <p className='Ambassadorship-imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
            </div>
              <div>
              <img className='Ambassadorship-imgs-alt-img' src={img6} alt="Описание изображения" />
              <p className='Ambassadorship-imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
              </div>
                <div>
                <img className='Ambassadorship-imgs-alt-img' src={img7} alt="Описание изображения" />
                <p className='Ambassadorship-imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
                </div>
                  <div>
                  <img className='Ambassadorship-imgs-alt-img' src={img8} alt="Описание изображения" /> 
                  <p className='Ambassadorship-imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
                  </div>
            </div>
      </div>
  </div>
  )
}

export default Ambassadorship;
