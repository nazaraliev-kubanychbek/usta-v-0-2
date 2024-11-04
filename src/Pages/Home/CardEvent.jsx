import card from "./img/slider_img.png";
import "./Home.scss";
import { useState, useEffect } from 'react'

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
            <img draggable="false" src={card} alt="card" />
            <p className="slider-cards-card__date">дд мм гг</p>
            <p className="slider-cards-card__name">Новости</p>
        </div>
    );
}

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import card1 from './img/slider/card1.png'
import card2 from './img/slider/card2.png'
import card3 from './img/slider/card3.png'
import card4 from './img/slider/card4.png'
import card5 from './img/slider/card5.png'
function Slider({name}) {
    const swiperRef = useRef(null);

    const handlePrevSlide = () => {
        if (swiperRef.current) swiperRef.current.swiper.slidePrev();
    };

    const handleNextSlide = () => {
        if (swiperRef.current) swiperRef.current.swiper.slideNext();
    };

    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const updateSlidesPerView = () => {
            const width = window.innerWidth;

            if (width < 600) {
                setSlidesPerView(1);
            } else if (width < 1000) {
                setSlidesPerView(2);
            } else if (width < 1400) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(4);
            }
        };

        // Устанавливаем количество слайдов при загрузке компонента
        updateSlidesPerView();

        // Обновляем количество слайдов при изменении размера экрана
        window.addEventListener('resize', updateSlidesPerView);

        return () => window.removeEventListener('resize', updateSlidesPerView);
    }, []);
    return (
        <div className="padding">
            <div className="container">
                <div className="slider">
                    <div className="slider-row">
                        <div className="slider-row-name">{name}</div>
                        <div className="slider-btn">
                            <img
                                src={sliderIconLeft}
                                className="slider-btn-icon"
                                onClick={handlePrevSlide}
                                alt="Previous Slide"
                            />
                            <img
                                src={sliderIconRight}
                                className="slider-btn-icon"
                                onClick={handleNextSlide}
                                alt="Next Slide"
                            />
                        </div>
                    </div>
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={30}
                        slidesPerView={slidesPerView}
                        loop
                    >
                        <SwiperSlide>
                            <div className="slider-cards-card">
                                <img draggable="false" className="slider-cards-card__img" src={card1} alt="card" />
                                <p className="slider-cards-card__date">20.06.2024</p>
                                <p className="slider-cards-card__name">USTA INTERNATIONAL стал официальным партнером международного двжижения "Один пояс и путь"

                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-cards-card">
                                <img draggable="false" className="slider-cards-card__img" src={card2} alt="card" />
                                <p className="slider-cards-card__date">30.07.2024</p>
                                <p className="slider-cards-card__name">USTA INTERNATIONAL профинансировала сборную Кыргызстана по Digital Construction

                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-cards-card">
                                <img draggable="false" className="slider-cards-card__img" src={card3} alt="card" />
                                <p className="slider-cards-card__date">10.08.2024</p>
                                <p className="slider-cards-card__name">Завершился первый "AEC Hakhaton" в г.Бишкек</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-cards-card">
                                <img draggable="false" className="slider-cards-card__img" src={card4} alt="card" />
                                <p className="slider-cards-card__date">10.09.2024</p>
                                <p className="slider-cards-card__name">USTA INTERNATIONAL и Кыргыз Жайты будут строить современные искусственные ледники</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-cards-card">
                                <img draggable="false" className="slider-cards-card__img" src={card5} alt="card" />
                                <p className="slider-cards-card__date">01.10.2024</p>
                                <p className="slider-cards-card__name">BIM в Кыргызстане</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Slider;

function BigBlock({ head, img1, img2, img3, img4, subhead, subheadTag = "h1", p, btn }) {
    const SubheadTag = subheadTag; // Dynamic tag based on prop

    return (
        <div className="padding-100px">
            <div className="container">
                <h1 className="bigBlock-text-head">{head}</h1>
                <div className="bigBlock">
                    <div className="bigBlock-images">
                        {img1 && <img src={img1} alt="big block image 1" />}
                        {img2 && <img src={img2} alt="big block image 2" />}
                        {img3 && <img src={img3} alt="big block image 3" />}
                        {img4 && <img src={img4} alt="big block image 4" />}
                    </div>
                    <div className="bigBlock-text">
                        <div>
                            <SubheadTag>{subhead}</SubheadTag>
                            <p dangerouslySetInnerHTML={{ __html: p }} />
                        </div>
                        {btn === "true" && (
                            <div className="bigBlock-text-btn">ПОДРОБНЕЕ</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function BigBlockReverse({ head, img1, img2, img3, img4, subhead, subheadTag = "h1", p, btn }) {
    const SubheadTag = subheadTag; // Dynamic tag based on prop

    return (
        <div className="padding-100px">
            <div className="container">
                <h1 className="bigBlock-text-head">{head}</h1>
                <div className="bigBlock" style={{ flexDirection: "row-reverse" }}>
                    <div className="bigBlock-images">
                        {img1 && <img src={img1} alt="big block image 1" />}
                        {img2 && <img src={img2} alt="big block image 2" />}
                        {img3 && <img src={img3} alt="big block image 3" />}
                        {img4 && <img src={img4} alt="big block image 4" />}
                    </div>
                    <div className="bigBlock-text">
                        <div>
                            <SubheadTag>{subhead}</SubheadTag>
                            <p dangerouslySetInnerHTML={{ __html: p }} />
                        </div>
                        {btn === "true" && (
                            <div className="bigBlock-text-btn">ПОДРОБНЕЕ</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


function InfoBlock({head, p, InfoImg}) {
    return (
        <div className="padding-100px">
            <div className="container">
                <div className="InfoBlock">
                    <div className="InfoBlock-img">
                        <img src={InfoImg} />
                    </div>
                    <div className="InfoBlock-text">
                        <h1>{head}</h1>
                        <p>{p}</p>
                        <div className="InfoBlock-text-btn">ПОДРОБНЕЕ</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoBlockReverse({ head, p, InfoImg }) {
    return (
        <div className="padding-100px">
            <div className="container">
                <div
                    className="InfoBlock"
                    style={{ flexDirection: "row-reverse" }}
                >
                    <div className="InfoBlock-img">
                        <img src={InfoImg} />
                    </div>
                    <div className="InfoBlock-text">
                        <h1 style={{ textAlign: "right" }}>{head}</h1>
                        <p style={{ textAlign: "right" }}>{p}</p>
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
