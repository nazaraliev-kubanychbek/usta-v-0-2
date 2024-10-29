import card from "./img/slider_img.png";
import "./Home.scss";
import bigBlockImg from "./img/mainPageImgEvents.png";
import InfoImg from "./img/InfoBlock.png";

import spanner from "./img/spanner.svg";
import arhitect from "./img/architect.svg";
import worker from "./img/worker.svg";
import screw from "./img/screw.svg";

import logo from "../../Shared/Images/logo.svg";

import sliderIconRight from "./img/slider-right.svg";
import sliderIconLeft from "./img/slider-left.svg";

function Card() {
  return (
    <div className="slider-cards-card">
      <img src={card} alt="card" />
      <p className="slider-cards-card__date">дд мм гг</p>
      <p className="slider-cards-card__name">Новости</p>
    </div>
  );
}

function Slider() {
  return (
    <div className="padding">
      <div className="container">
        <div className="slider">
          <div className="slider-row">
            <div className="slider-row-name"></div>
            <div className="slider-btn">
              <img src={sliderIconLeft} className="slider-btn-icon" />
              <img src={sliderIconRight} className="slider-btn-icon" />
            </div>
          </div>
          <div className="slider-cards">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

function BigBlock() {
  return (
    <div className="padding">
      <div className="container">
        <div className="bigBlock container">
          <div className="bigBlock-images">
            <img src={bigBlockImg} />
            <img src={bigBlockImg} />
            <img src={bigBlockImg} />
            <img src={bigBlockImg} />
          </div>
          <div className="bigBlock-text">
            <div>
              <h1>МЕРОПРИЯТИЕ</h1>
              <p>
                В мире бизнеса все начинается с надежных партнеров. Мы глубоко
                осознаем, что качество наших товаров и услуг напрямую зависит от
                тех, кто стоит за кулисами — наших поставщиков. Это компании, с
                которыми мы делим ответственность за конечный результат, ведь
                именно их продукция и услуги закладывают основу для нашего
                успеха.
                <ul>
                  <li>
                    Гарантирует стабильное и своевременное выполнение
                    обязательств.
                  </li>
                  <li>Строго соблюдает стандарты качества.</li>
                  <li>Ориентирован на долгосрочное сотрудничество.</li>
                  <li>Поддерживает инновационные решения.</li>
                </ul>
              </p>
            </div>
            <div className="bigBlock-text-btn">ПОДРОБНЕЕ</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function BigBlockReverse() {
  return (
    <div className="padding">
      <div className="container">
        <div
          className="bigBlock"
          style={{ flexDirection: "row-reverse" }}
        >
          <div className="bigBlock-images">
            <img src={bigBlockImg} />
            <img src={bigBlockImg} />
            <img src={bigBlockImg} />
            <img src={bigBlockImg} />
          </div>
          <div className="bigBlock-text">
            <div>
              <h1>МЕРОПРИЯТИЕ</h1>
              <p>
                В мире бизнеса все начинается с надежных партнеров. Мы глубоко
                осознаем, что качество наших товаров и услуг напрямую зависит от
                тех, кто стоит за кулисами — наших поставщиков. Это компании, с
                которыми мы делим ответственность за конечный результат, ведь
                именно их продукция и услуги закладывают основу для нашего
                успеха.
                <ul>
                  <li>
                    Гарантирует стабильное и своевременное выполнение
                    обязательств.
                  </li>
                  <li>Строго соблюдает стандарты качества.</li>
                  <li>Ориентирован на долгосрочное сотрудничество.</li>
                  <li>Поддерживает инновационные решения.</li>
                </ul>
              </p>
            </div>
            <div className="bigBlock-text-btn" style={{ textAlign: "left" }}>
              ПОДРОБНЕЕ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBlock() {
  return (
    <div className="padding">
      <div className="container">
        <div className="InfoBlock">
          <div className="InfoBlock-img">
            <img src={InfoImg} />
          </div>
          <div className="InfoBlock-text">
            <h1>Амбассадорство</h1>
            <p>
              Наша компания тщательно выбирает партнеров, чтобы обеспечить вас
              лучшими товарами и услугами. Мы работаем только с проверенными
              поставщиками, которые разделяют наши ценности в отношении
              качества, надежности и оперативности.
            </p>
            <div className="InfoBlock-text-btn">ПОДРОБНЕЕ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBlockReverse() {
  return (
    <div className="padding">
      <div className="container">
        <div
          className="InfoBlock"
          style={{ flexDirection: "row-reverse" }}
        >
          <div className="InfoBlock-img">
            <img src={InfoImg} />
          </div>
          <div className="InfoBlock-text">
            <h1 style={{ textAlign: "right" }}>Амбассадорство</h1>
            <p style={{ textAlign: "right" }}>
              Наша компания тщательно выбирает партнеров, чтобы обеспечить вас
              лучшими товарами и услугами. Мы работаем только с проверенными
              поставщиками, которые разделяют наши ценности в отношении
              качества, надежности и оперативности.
            </p>
            <div className="InfoBlock-text-btn" style={{ textAlign: "right" }}>
              ПОДРОБНЕЕ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesTab() {
  return (
    <div className="padding">
      <div className="container">
        <div className="Service">
          <h1>УСЛУГИ</h1>
          <div className="Service-list">
            <div className="Service-list-service">
              <img src={spanner} />
              <p>Генпроектирование</p>
            </div>
            <div className="Service-list-service">
              <img src={arhitect} />
              <p>Архитектурные решения</p>
            </div>
            <div className="Service-list-service">
              <img src={worker} />
              <p>Конструктивные решения</p>
            </div>
            <div className="Service-list-service">
              <img src={screw} />
              <p>Инженерные сети</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartnersTab() {
  return (
    <div className="padding">
      <div className="container">
        <div className="Partners">
          <h1>ПАРТНЕРЫ</h1>
          <div className="Partners-list">
            <div className="Partners-list-partners">
              <img src={logo} />
            </div>
            <div className="Partners-list-partners">
              <img src={logo} />
            </div>
            <div className="Partners-list-partners">
              <img src={logo} />
            </div>
            <div className="Partners-list-partners">
              <img src={logo} />
            </div>
            <div className="Partners-list-partners">
              <img src={logo} />
            </div>
            <div className="Partners-list-partners">
              <img src={logo} />
            </div>
            <div className="Partners-list-partners">
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {
  Slider,
  Card,
  BigBlock,
  BigBlockReverse,
  InfoBlock,
  InfoBlockReverse,
  ServicesTab,
  PartnersTab,
};
