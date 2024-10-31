import React from 'react';
import './styles/partners.scss';
import logo from '../../Images/logo-partners.png'

const Partners = () => {
    return (
        <div className='container'>
            <div className="partners">
            <h1 className='container-partners-h1'>ПАРТНЕРЫ</h1>

            <div className="container-partners">

                    <div className="card-content">
                        <img className='card-content-img' src={logo} alt="" />
                    </div>
                    <div className="card-content">
                        <img className='card-content-img' src={logo} alt="" />
                    </div>
                    <div className="card-content">
                        <img className='card-content-img' src={logo} alt="" />
                    </div>
                    <div className="card-content">
                        <img className='card-content-img' src={logo} alt="" />
                    </div>
                    <div className="card-content">
                        <img className='card-content-img' src={logo} alt="" />
                    </div>
                    <div className="card-content">
                        <img className='card-content-img' src={logo} alt="" />
                    </div>
                    <div className="card-content">
                        <img className='card-content-img' src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partners;
