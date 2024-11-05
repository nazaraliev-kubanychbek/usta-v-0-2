import img from "./imgs/Services (1).png"
import img2 from "./imgs/Services (2).png"
import img3 from "./imgs/Services (3).png"
import img4 from "./imgs/Services (4).png"
import img5 from "./imgs/Services (5).png"
import img6 from "./imgs/Services (6).png"
import img01 from "./imgs/Services (7).png"

import img7 from "./imgs/category/Rectangle 119 (1).png"
import img8 from "./imgs/category/Rectangle 120 (1).png"
import img9 from "./imgs/category/Rectangle 121 (1).png"
import img0 from "./imgs/category/Rectangle 123 (1).png"


import "./Services.scss";
import { InfoBlock, InfoBlockReverse } from "../../Widgets/ui/Components";
import "../../Widgets/ui/scss/styles.scss"

function Services() {
  return (
    <div className="Services">
      <div className="mainscreen">
        <div className="container">
          <div className="mainscreen-text">
            <h1 className="mainscreen-text__h1">Услуги</h1>
            <p className="mainscreen-text__p">
              “USTA International” вдохновляет и направляет людей в сфере
              инженерии. Мы делаем инженерный подход понятным и привлекательным,
              чтобы каждый мог найти себя в этой профессии и реализоваться.
            </p>
          </div>
        </div>
      </div>
      <div className="padding-box"></div>
    <InfoBlock 
        head="Организация сетевого взаимодействия"
        p="Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit."
        InfoImg={img}
        URL="/url"
    />
    <div className="padding-box"></div>
        <InfoBlockReverse 
        head="Помощь в государственно-частном партнерстве"
        p="Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit."
        InfoImg={img2}
        URL="/url"
    />
    <div className="padding-box"></div>
        <InfoBlock 
        head="Проектирование экологических и природоохранных решений"
        p="Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit."
        InfoImg={img3}
        URL="/url"
    />
    <div className="padding-box"></div>
        <InfoBlockReverse 
        head="Генпроектирование инновационных инфраструктурных решений"
        p="Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit."
        InfoImg={img4}
        URL="/url"
    />
    <div className="padding-box"></div>
        <InfoBlock 
        head="Организация семинаров и конференций"
        p="Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit."
        InfoImg={img5}
        URL="/url"
    />
    <div className="padding-box"></div>
        <InfoBlockReverse 
        head="Интеграция"
        p="Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit."
        InfoImg={img6}
        URL="/url"
    />
<div className="padding-box"></div>
<div className="container">
  <h1 className="Services-h1">Статьи и рекомендации</h1>
    <div className="Services-h1-imgs">
      <div>
          <img className="Services-h1-imgs-img" src={img7} alt="" />
          <p className="Services-h1-imgs-img-title">Развитие карьеры</p>
      </div>
      <div>
          <img className="Services-h1-imgs-img" src={img8} alt="" />
          <p className="Services-h1-imgs-img-title">Собеседование</p>
      </div>
      <div>
          <img className="Services-h1-imgs-img" src={img9} alt="" />
          <p className="Services-h1-imgs-img-title">Как добиваться успеха</p>
      </div>
      <div>
          <img className="Services-h1-imgs-img" src={img0} alt="" />
          <p className="Services-h1-imgs-img-title">О инженерной сфере</p>
      </div>
    </div>
  </div>
<div className="padding-box"></div>
  <InfoBlock 
        head="Организация семинаров и конференций" className="Services-text-head"
        p="Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. Praesent turpis odio rutrum platea egestas duis turpis nunc. Non vitae ac risus molestie tristique molestie enim volutpat. Vehicula iaculis sem velit accumsan velit."
        btn="troo"
        InfoImg={img01}
        URL="/url"
    />
<div className="padding"></div>

</div>
  );
}

export default Services;
