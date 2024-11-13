import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles/partners.scss';
import logo from '../../Images/logo-partners.png';

const Partners = () => {
    return (
        <div className='container'>
            <div className="partners">
                <h1 className='container-partners-h1'>ПАРТНЕРЫ</h1>

                {/* Настраиваем Swiper с адаптивными настройками */}
                <Swiper
                    spaceBetween={20} // расстояние между карточками
                    slidesPerView={4} // количество карточек по умолчанию (для больших экранов)
                    pagination={{ clickable: true }} // пагинация внизу слайдера
                    breakpoints={{
                        1420: {
                            slidesPerView: 7, // 7 карточек на экранах 1024px и больше
                            spaceBetween: 20, // отступы между карточками
                        },
                        1220: {
                            slidesPerView: 6, // 7 карточек на экранах 1024px и больше
                            spaceBetween: 20, // отступы между карточками
                        },
                        1024: {
                            slidesPerView: 5.5, // 7 карточек на экранах 1024px и больше
                            spaceBetween: 20, // отступы между карточками
                        },
                        993: {
                            slidesPerView: 5, // 7 карточек на экранах 1024px и больше
                            spaceBetween: 20, // отступы между карточками
                        },
                        770: {
                            slidesPerView: 4, // 7 карточек на экранах 1024px и больше
                            spaceBetween: 20, // отступы между карточками
                        },
                        568: {
                            slidesPerView: 3, // 7 карточек на экранах 1024px и больше
                            spaceBetween: 20, // отступы между карточками
                        },
                        480: {
                            slidesPerView: 2.8, // 7 карточек на экранах 1024px и больше
                            spaceBetween: 20, // отступы между карточками
                        },
                        360: {
                            slidesPerView: 2, // 7 карточек на экранах 1024px и больше
                            spaceBetween: 20, // отступы между карточками
                        },
                        260: {
                            slidesPerView: 1.2, // 7 карточек на экранах 1024px и больше
                            spaceBetween: 0, // отступы между карточками
                        }
                    }}
                    loop={false} // чтобы слайды прокручивались бесконечно
                >
                    {/* Каждый логотип размещаем в отдельный SwiperSlide */}
                    {[...Array(7)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="card-content">
                                <img className='card-content-img' src={logo} alt="Лого партнера" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Partners;
