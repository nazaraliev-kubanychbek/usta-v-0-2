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
    <div className="Ambassadorship">
    <div className="mainscreen">
    <div className="container">
      <div className="mainscreen-text">
        <h1 className="mainscreen-text__h1">Амбассадорство</h1>
        <p className="mainscreen-text__p">
          USTA INTERNATIONAL продвигает продукты и инновации компаний партнеров, объясняя их преимущества на профессиональных мероприятиях и проектах
        </p>
      </div>
    </div>
  </div>
  <div className="Ambassadorship-container">
    <div className="Ambassadorship-container-links">
      <a className='Ambassadorship-container-links-link' href="#">Реквизиты</a>
      <a className='Ambassadorship-container-links-link' href="#">Недвижимость</a>
      <a className='Ambassadorship-container-links-link' href="#">Участки</a>
      <a className='Ambassadorship-container-links-link' href="#">Оборудования</a>
      <a className='Ambassadorship-container-links-link' href="#">Техника</a>
      <a className='Ambassadorship-container-links-link' href="#">Коммерческие предложения</a>
      <a className='Ambassadorship-container-links-link' href="#">Услуги </a>
    </div>
  </div>
<div className='Ambassadorship-imgs'>
<div>
<img className='Ambassadorship-imgs-alt-img' src={img1} alt="Описание изображения" /> 
<p className='Ambassadorship-imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
</div>
<div>
<img className='Ambassadorship-imgs-alt-img' src={img2} alt="Описание изображения" />
<p className='Ambassadorship-imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
</div>
<div>
<img className='Ambassadorship-imgs-alt-img' src={img3} alt="Описание изображения" />
<p className='Ambassadorship-imgs-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim.</p>
</div>
<div>
<img className='Ambassadorship-imgs-alt-img' src={img4} alt="Описание изображения" /> 
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
<div className='Ambassadorship-padding'></div>
</div>
  )
}

export default Ambassadorship;
