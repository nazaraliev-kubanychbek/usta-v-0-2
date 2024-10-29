import "./Home.scss";

import {
  BigBlock,
  BigBlockReverse,
  InfoBlock,
  InfoBlockReverse,
  ServicesTab,
  PartnersTab,
  Slider,
} from "./CardEvent";

function Home() {
  return (
    <div className="home">
      <div className="main-screen">
        <div className="container">
          <div className="column">
            <div className="main-screen-text">
              USTA International — это международное сообщество инженеров и
              специалистов, фокусирующееся на устойчивых технологических
              решениях для достижения целей устойчивого развития в Центральной
              Азии. &quot;Мы поддерживаем обмен знаниями, внедрение инноваций в
              области инфраструктуры, энергетики и экологии, а также
              способствуем глобальному партнерству для устойчивого развития&quot;
            </div>
            <div className="main-screen-btn">ПРИСОЕДИНИТЬСЯ</div>
          </div>
        </div>
      </div>
      <Slider />
      <ServicesTab />
      <PartnersTab />
      <BigBlock />
      <BigBlockReverse />
      <InfoBlock />
      <InfoBlockReverse />
      <InfoBlock />
      <InfoBlockReverse />
      <InfoBlock />
      <InfoBlockReverse />
      <Slider />
    </div>
  );
}

export default Home;
