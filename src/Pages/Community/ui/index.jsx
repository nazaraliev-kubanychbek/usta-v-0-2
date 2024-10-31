import React from 'react';
import logo from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import './styles/index.scss'
const Index = () => {
    return (
        <div className="community-index">
            <div className='container'>
            <h1 className="big-title">КЛЮЧЕВЫЕ КОНТАКТЫ</h1>
            <div className="row index-block">
                <div className="col-3  index-block-col">
                <img src={logo} alt="" className="index-block-logo" />
                <p className="index-block-text">Юридическая помощь</p>                    
                </div>
                <div className="col-3 index-block-col">
                    <img src={logo2} alt="" className="index-block-logo" />
                    <p className="index-block-text">Бухгалтерская помощь</p>
                </div>
                <div className="col-3 index-block-col">
                    <img src={logo3} alt="" className="index-block-logo" />
                    <p className="index-block-text">Помощь в цифровизации</p>
                </div>
                <div className="col-3 index-block-col">
                    <img src={logo3} alt="" className="index-block-logo" />
                    <p className="index-block-text">Помощь в цифровизации</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Index;
