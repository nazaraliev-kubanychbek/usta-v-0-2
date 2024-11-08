import './Contacts.scss'

import instagram from '../../Shared/Images/social/instagram.png'
import linkedin from '../../Shared/Images/social/linkedin.png'
import telegram from '../../Shared/Images/social/telegram.png'
import youtube from '../../Shared/Images/social/YouTube.png'
import phone from '../../Shared/Images/social/phone-call.png'


function ContactPage() {
    return (
        <div className="container">
            <div className="ContactsPage">
                <h1 className="ContactsPage-head">КОНТАКТЫ</h1>
                <div className="ContactsPage-elements">
                    <div className="ContactsPage-elements-upperBlocks">
                        <div className="ContactsPage-elements-upperBlock">
                            <h1 className="ContactsPage-elements-upperBlock-head">МЫ В СОЦИАЛЬНЫХ СЕТЯХ:</h1>
                            <div className="ContactsPage-elements-upperBlock-content">
                                <div className="ContactsPage-elements-upperBlock-content-block">
                                    <div className="ContactsPage-elements-upperBlock-content-block-socmed"><img src={instagram} /><p>Instagram</p></div>
                                    <div className="ContactsPage-elements-upperBlock-content-block-socmed"><img src={youtube} /><p>YouTube</p></div>
                                </div>
                                <div className="ContactsPage-elements-upperBlock-content-block">
                                    <div className="ContactsPage-elements-upperBlock-content-block-socmed"><img src={telegram} /><p>Telegram</p></div>
                                    <div className="ContactsPage-elements-upperBlock-content-block-socmed"><img src={linkedin} /><p>LinkedIn</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="ContactsPage-elements-upperBlock">
                            <h1 className="ContactsPage-elements-upperBlock-head">НАШИ КОНТАКТЫ:</h1>
                            <div className="ContactsPage-elements-upperBlock-content">
                                <div className="ContactsPage-elements-upperBlock-content-block">
                                    <div className="ContactsPage-elements-upperBlock-content-block-socmed"><img src={phone} /><p>+996 755 405 666</p></div>
                                    <div className="ContactsPage-elements-upperBlock-content-block-socmed"><img src={youtube} /><p>Instagram</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ContactsPage-elements-bottomBlock">
                        <div className="ContactsPage-elements-bottomBlock-head">КАК НАЙТИ НАС?</div>
                        <div className="ContactsPage-elements-bottomBlock-content">
                            <div className="ContactsPage-elements-bottomBlock-content-block">
                                <div className="ContactsPage-elements-bottomBlock-content-block-paragraph"><p>Республика Кыргызстан:</p><br /><p>Город: Бишкек<br /> Улица: Мырзалы Аматова 1Б</p></div>
                            </div>
                            <div className="ContactsPage-elements-bottomBlock-content-block">
                                <div className="skeleton"></div>
                                {/*<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d189.56306011997646!2d72.802893!3d40.519293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdaf51e4e11011%3A0x2dd3bbd34364f3e1!2zSVQt0LrRg9GA0YHRiyDQmtGD0YDRgdGLINC_0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNGPINCe0YggR2Vla3M!5e0!3m2!1sru!2sus!4v1731071737315!5m2!1sru!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage; 