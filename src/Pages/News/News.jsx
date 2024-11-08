
import { useParams, useLocation } from "react-router-dom";

import card1 from '../Home/img/slider/card1.png'
import card2 from '../Home/img/slider/card2.png'
import card3 from '../Home/img/slider/card3.png'
import card4 from '../Home/img/slider/card4.png'
import card5 from '../Home/img/slider/card5.png'

//import team1 from './img/slider/team1.png'
//import team2 from './img/slider/team2.png'
//import team3 from './img/slider/team3.png'
//import team4 from './img/slider/team4.png'
//import team5 from './img/slider/team5.png'

import Slider from '../Home/CardEvent'
import './News.scss'

const cardDataNews = [
    { type: "news", img: card1, date: "20.06.2024", text: "USTA INTERNATIONAL стал официальным партнером международного двжижения \"Один пояс и путь\"" },
    { type: "news", img: card2, date: "30.07.2024", text: "USTA INTERNATIONAL профинансировала сборную Кыргызстана по Digital Construction" },
    { type: "news", img: card3, date: "10.08.2024", text: "Завершился первый \"AEC Hakhaton\" в г.Бишкек" },
    { type: "news", img: card4, date: "10.09.2024", text: "USTA INTERNATIONAL и Кыргыз Жайты будут строить современные искусственные ледники" },
    { type: "news", img: card5, date: "01.10.2024", text: "BIM в Кыргызстане" },
];
//const cardDataTeam = [
//    { type: "team", img: team1, name: "ФИО", pro: "Должность" },
//    { type: "team", img: team2, name: "ФИО", pro: "Должность" },
//    { type: "team", img: team3, name: "ФИО", pro: "Должность" },
//    { type: "team", img: team4, name: "ФИО", pro: "Должность" },
//    { type: "team", img: team5, name: "ФИО", pro: "Должность" },
//]

const News = () => {
    const { id } = useParams();
    const card = cardDataNews[id];

    if (!card) {
        return <div>Карточка не найдена</div>;
    }

    return (
        <div className="container">
            <div className="News padding-bottom">
                <div className="News-head">
                    <div className="News-head-header">НОВОСТИ</div>
                    <div className="News-date">{card.date}</div>
                </div>
                <div className="News-content">
                    <img src={card.img} alt="Card Detail" />
                    <div className="News-content-text">{card.text}</div>
                </div>
            </div>
            <Slider name="НОВОСТИ" cards={cardDataNews} />
        </div>
    );
};

export default News;
