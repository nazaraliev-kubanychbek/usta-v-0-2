import './Home.scss'


import { useRef, useState, useEffect } from 'react'

import spanner from "./img/spanner.svg";
import arhitect from "./img/architect.svg";
import worker from "./img/worker.svg";
import screw from "./img/screw.svg";

import logo from "../../Shared/Images/logo.svg";

import sliderIconRight from "./img/slider-right.svg";
import sliderIconLeft from "./img/slider-left.svg";

import card1 from './img/slider/card1.png'
import card2 from './img/slider/card2.png'
import card3 from './img/slider/card3.png'
import card4 from './img/slider/card4.png'
import card5 from './img/slider/card5.png'

function Card({ type, img, date, text, pro, name }) {
    return (
        <div className="slider-cards-card">
            <img draggable="false" src={img} className="slider-cards-card__img" />
            {type === "news" ? (
                <>
                    <p className="slider-cards-card__date">{date}</p>
                    <p className="slider-cards-card__text">{text}</p>
                </>
            ) : type === "team" ? (
                <>
                    <p className="slider-cards-card__name">{name}</p>
                    <p className="slider-cards-card__pro">{pro}</p>
                </>
            ) : null}
        </div>
    );
}


import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


function Slider({ name, cards = [] }) {
    const navigate = useNavigate();
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [spaceBetween, setSpaceBetween] = useState(150);

    const handleCardClick = (id) => {
        navigate(`/news/${id}`);
    };

    const handlePrevSlide = () => {
        if (swiperRef.current) swiperRef.current.swiper.slidePrev();
    };

    const handleNextSlide = () => {
        if (swiperRef.current) swiperRef.current.swiper.slideNext();
    };

    useEffect(() => {
        const updateSliderSettings = () => {
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

        updateSliderSettings();
        window.addEventListener("resize", updateSliderSettings);

        return () => window.removeEventListener("resize", updateSliderSettings);
    }, []);

    useEffect(() => {
        const updateSpaceBetween = () => {
            setSpaceBetween(window.innerWidth < 768 ? 120 : 30);
        };

        window.addEventListener("resize", updateSpaceBetween);

        return () => window.removeEventListener("resize", updateSpaceBetween);
    }, []);

    return (
        <div className="padding">
            <div className="container">
                <div className="slider">
                    <div className="slider-row">
                        <div className="slider-row-name">{name}</div>
                        <div className="slider-btn">
                            <img
                                src={sliderIconRight}
                                className="slider-btn-icon flipped"
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
                        className="slider-cards"
                        ref={swiperRef}
                        spaceBetween={spaceBetween}
                        slidesPerView={slidesPerView}
                        loop
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div onClick={() => handleCardClick(index)}>
                                    <Card
                                        type={card.type}
                                        img={card.img}
                                        pro={card.pro}
                                        name={card.name}
                                        date={card.date}
                                        text={card.text}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}


export default Slider;



function BigBlock({ head, img1, img2, img3, img4, subhead, subheadTag = "h1", p, btn, URL }) {
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
                            <SubheadTag style={{ marginBlock: "0px", marginBlockStart: "0px", marginBlockEnd: "0px", margin: "0px" }}>{subhead}</SubheadTag>
                            <p dangerouslySetInnerHTML={{ __html: p }} />
                        </div>
                        {btn === "true" && (
                            <div className="bigBlock-text-btn"><a href={URL}>ПОДРОБНЕЕ</a></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function BigBlockAlt({ head, img1, img2, img3, img4, subhead, subheadTag = "h1", p, btn, URL }) {
    const SubheadTag = subheadTag; // Dynamic tag based on prop

    return (
        <div className="padding-100px">
            <div className="container">
                <h1 className="bigBlock-text-head">{head}</h1>
                <div className="bigBlock">
                    <div className="bigBlock-imagesAlt">
                        {img1 && <img src={img1} alt="big block image 1" />}
                        {img2 && <img src={img2} alt="big block image 2" />}
                        {img3 && <img src={img3} alt="big block image 3" />}
                        {img4 && <img src={img4} alt="big block image 4" />}
                    </div>
                    <div className="bigBlock-text-alt">
                        <div>
                            <SubheadTag style={{ marginBlock: "0px", marginBlockStart: "0px", marginBlockEnd: "0px", margin: "0px" }}>{subhead}</SubheadTag>
                            <p dangerouslySetInnerHTML={{ __html: p }} />
                        </div>
                        {btn === "true" && (
                            <div className="bigBlock-text-btn"><a href={URL}>ПОДРОБНЕЕ</a></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
function BigBlockAltReverse({ head, img1, img2, img3, img4, subhead, subheadTag = "h1", p, btn, URL }) {
    const SubheadTag = subheadTag; // Dynamic tag based on prop

    return (
        <div className="padding-100px">
            <div className="container">
                <h1 className="bigBlock-text-head">{head}</h1>
                <div className="bigBlock reverse">
                    <div className="bigBlock-imagesAlt">
                        {img1 && <img src={img1} alt="big block image 1" />}
                        {img2 && <img src={img2} alt="big block image 2" />}
                        {img3 && <img src={img3} alt="big block image 3" />}
                        {img4 && <img src={img4} alt="big block image 4" />}
                    </div>
                    <div className="bigBlock-text-alt">
                        <div>
                            <SubheadTag style={{ marginBlock: "0px", marginBlockStart: "0px", marginBlockEnd: "0px", margin: "0px" }}>{subhead}</SubheadTag>
                            <p dangerouslySetInnerHTML={{ __html: p }} />
                        </div>
                        {btn === "true" && (
                            <div className="bigBlock-text-btn"><a href={URL}>ПОДРОБНЕЕ</a></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function BigBlockReverse({ head, img1, img2, img3, img4, subhead, subheadTag = "h1", p, btn, URL }) {
    const SubheadTag = subheadTag;

    return (
        <div className="padding-100px">
            <div className="container">
                <h1 className="bigBlock-text-head">{head}</h1>
                <div className="bigBlock reverse">
                    <div className="bigBlock-images">
                        {img1 && <img src={img1} alt="big block image 1" />}
                        {img2 && <img src={img2} alt="big block image 2" />}
                        {img3 && <img src={img3} alt="big block image 3" />}
                        {img4 && <img src={img4} alt="big block image 4" />}
                    </div>
                    <div className="bigBlock-text">
                        <div>
                            <SubheadTag style={{ marginBlock: "0px", marginBlockStart: "0px", marginBlockEnd: "0px", margin: "0px" }}>{subhead}</SubheadTag>
                            <p dangerouslySetInnerHTML={{ __html: p }} />
                        </div>
                        {btn === "true" && (
                            <div className="bigBlock-text-btn"><a href={URL}>ПОДРОБНЕЕ</a></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


function InfoBlock({ head, p, InfoImg, URL }) {
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
                        <div className="InfoBlock-text-btn"><a href={URL}>ПОДРОБНЕЕ</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoBlockReverse({ head, p, InfoImg, URL }) {
    return (
        <div className="padding-100px">
            <div className="container">
                <div
                    className="InfoBlock reverse"
                >
                    <div className="InfoBlock-img">
                        <img src={InfoImg} />
                    </div>
                    <div className="InfoBlock-text">
                        <h1 style={{ textAlign: "right" }}>{head}</h1>
                        <p style={{ textAlign: "right" }}>{p}</p>
                        <div className="InfoBlock-text-btn" style={{ textAlign: "right" }}>
                            <a href={URL}>ПОДРОБНЕЕ</a>
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

function Partners({ img }) {
    return (
        <div className="Partners-list-partners">
            <img src={img} alt="Partner logo" />
        </div>
    );
}

function PartnersTab({ partners = [] }) {
    const [PartnersPerView, setPartnersPerView] = useState(7);
    const [spaceBetween, setSpaceBetween] = useState(30);
    const swiperRef = useRef(null);

    useEffect(() => {
        const updateSpaceBetween = () => {
            let newSpaceBetween = window.innerWidth < 770 ? 160 : 110;
            newSpaceBetween = window.innerWidth < 768 ? 170 : 140;
            newSpaceBetween = window.innerWidth < 600 ? 150 : 130;
            newSpaceBetween = window.innerWidth < 512 ? 10 : 120;
            newSpaceBetween = window.innerWidth < 380 ? 180 : 180;
            setSpaceBetween(newSpaceBetween);

            // Обновление Swiper вручную
            if (swiperRef.current?.swiper) {
                swiperRef.current.swiper.params.spaceBetween = newSpaceBetween;
                swiperRef.current.swiper.update();
            }
        };

        updateSpaceBetween();
        window.addEventListener("resize", updateSpaceBetween);

        return () => window.removeEventListener("resize", updateSpaceBetween);
    }, []);

    useEffect(() => {
        const updatePartnersPerView = () => {
            const width = window.innerWidth;

            if (width < 768) {
                setPartnersPerView(3);
            } else if (width < 1024) {
                setPartnersPerView(4);
            } else if (width < 1400) {
                setPartnersPerView(5);
            } else {
                setPartnersPerView(7);
            }

            // Обновление Swiper вручную
            if (swiperRef.current?.swiper) {
                swiperRef.current.swiper.params.slidesPerView = PartnersPerView;
                swiperRef.current.swiper.update();
            }
        };

        updatePartnersPerView();
        window.addEventListener("resize", updatePartnersPerView);

        return () => window.removeEventListener("resize", updatePartnersPerView);
    }, [PartnersPerView]);

    return (
        <div className="padding">
            <div className="container">
                <div className="Partners">
                    <h1>ПАРТНЕРЫ</h1>
                    <div className="Partners-list">
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={10}
                            slidesPerView={PartnersPerView}
                            loop
                        >
                            {partners.map((partner, index) => (
                                <SwiperSlide key={index}>
                                    <Partners img={partner.img} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    Card,
    Slider,
    BigBlock,
    BigBlockAlt,
    BigBlockAltReverse,
    BigBlockReverse,
    InfoBlock,
    InfoBlockReverse,
    ServicesTab,
    Partners,
    PartnersTab,
};
