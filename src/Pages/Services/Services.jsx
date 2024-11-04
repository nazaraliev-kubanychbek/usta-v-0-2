import "./Services.scss";
import imgs1 from "./imgs/Rectangle 47.png";
import imgs2 from "./imgs/Rectangle 47 (1).png";

import imgs3 from "./imgs/Rectangle 119.png";
import imgs4 from "./imgs/Rectangle 120.png";
import imgs5 from "./imgs/Rectangle 121.png";
import imgs6 from "./imgs/Rectangle 123.png";

import imgs7 from "./imgs/Rectangle 59.png";
function Services() {
  return (
    <div className="dox-box">
      <div className="body">
        <div className="container">
          <h1 className="body-text">Услуги</h1>
          <p className="body-title">
            “USTA International” вдохновляет и направляет людей в сфере
            инженерии. Мы делаем инженерный подход понятным и привлекательным,
            чтобы каждый мог найти себя в этой профессии и реализоваться.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <div className="Services">
            <div className="row">
              <div className="col-6">
                <img className="Services-img" src={imgs1} alt="Услуга 1" />
              </div>

              <div className="col-6">
                <div className="text">
                  <h3 className="Services-text">Lorem ipsum dolor sit </h3>
                  <p className="Services-title">
                    Lorem ipsum dolor sit amet consectetur. Sed porttitor amet
                    aenean enim. Praesent turpis odio rutrum platea egestas duis
                    turpis nunc. Non vitae ac risus molestie tristique molestie
                    enim volutpat. Vehicula iaculis sem velit accumsan velit.
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="text">
                  <h3 className="Services-text">Lorem ipsum dolor sit </h3>
                  <p className="Services-title">
                    Lorem ipsum dolor sit amet consectetur. Sed porttitor amet
                    aenean enim. Praesent turpis odio rutrum platea egestas duis
                    turpis nunc. Non vitae ac risus molestie tristique molestie
                    enim volutpat. Vehicula iaculis sem velit accumsan velit.
                  </p>
                </div>
              </div>

              <div className="col-6">
                <img className="Services-img2" src={imgs2} alt="Услуга 2" />
              </div>

            </div>
          </div>


          <div className="Services-fix">
            <h1 className="img-text-s">Статьи и рекомендации</h1>
            <div className="Services-imgs-4">
              <div>
                <img className="Services-img-3" src={imgs3} alt="Статья 1" />
                <p className="ass">Как развивать карьеру,</p>
              </div>
              <div>
                <img className="Services-img-3" src={imgs4} alt="Статья 2" />
                <p className="ass">Как проходить собеседования</p>
              </div>
              <div>
                <img className="Services-img-3" src={imgs5} alt="Статья 3" />
                <p className="ass">Как добиваться успеха</p>
              </div>
              <div>
                <img className="Services-img-3" src={imgs6} alt="Статья 4" />
                <p className="ass">О инженерной сфере</p>
              </div>
            </div>
          </div>



          <div className="lol">
            <div className="row">

              <div className="col-6">
              <div className="class-2">
              <img src={imgs7} alt="Статья 4" />
            </div>
              </div>

              <div className="col-6">
              <div className="class">
              <h3 className="lol-text">
                Стажировки и практические программах для студентов и молодых
                специалистов
              </h3>
              <p className="lol-title">
                Lorem ipsum dolor sit amet consectetur. Sed porttitor amet
                aenean enim. Praesent turpis odio rutrum platea egestas duis
                turpis nunc. Non vitae ac risus molestie tristique molestie enim
                volutpat. Vehicula iaculis sem velit accumsan velit.
              </p>
              <a className="lol-link" href="#">
                Узнать подробнее
              </a>
            </div>  
              </div>

            </div>



          </div>




        </div>
      </div>
    </div>
  );
}

export default Services;
