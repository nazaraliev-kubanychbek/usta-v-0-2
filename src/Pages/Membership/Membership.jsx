import './Membership.scss'
import bodyimg from './img/Rectangle 47.png'
import imgbanner from './img/Rectangle 47 (1).png'
import bannerimg1 from './img/Rectangle 47 (2).png'
import bannerimg2 from './img/Rectangle 47 (3).png'

import categoryimg1 from './img/Rectangle 119.png'
import categoryimg2 from './img/Rectangle 120.png'
import categoryimg3 from './img/Rectangle 121.png'
import categoryimg4 from './img/Rectangle 123.png'

function Membership() {
  return (
      <div className='member-container '>
        <div className=' member-body container-abdialim '>
          <div className="container">
            <div className="padding-bottom"> <h1 className='member-title'>ПРЕИМУЩЕСТВА И <span> ВОЗМОЖНОСТИ</span> </h1>
              <p className='member-text'>“USTA International” вдохновляет и направляет людей в сфере инженерии. Мы делаем инженерный подход понятным и привлекательным, чтобы каждый мог найти себя в этой профессии и реализоваться</p></div>
          </div>

        </div>
        <div className="container">
          {/* Преимущества для сообщества */}
          <div className='member-main-img'>
            <div className="row">
              <div className="col-6">
                <img src={bodyimg} alt="" className='img1' />
              </div>
              <div className="col-6">
                <h1 className='member-body-title'>ПРЕИМУЩЕСТВА ДЛЯ <span>СООБЩЕСТВА</span></h1>
                <p className='member-body-text'>Мы стремимся не только к успеху нашего бизнеса, но и к развитию сообщества, в котором работаем. Поддерживая местные инициативы, создавая новые рабочие места и внедряя экологически устойчивые решения, мы делаем вклад в улучшение жизни вокруг нас. Вместе с вами мы создаем лучшее будущее, где каждый получает возможность для роста и процветания.</p>
              </div>
            </div>

          </div>

          {/* Преимущества для мероприятий */}

          <div className='member-body padding'>
            <div className="row padding-right">
              
              
              <div className="col-6 describtion-block">
                <h1 className='member-main-title'>ПРЕИМУЩЕСТВА ДЛЯ <span>МЕРОПРИЯТИЙ</span> </h1>
                <p className='member-main-text'>Мы предлагаем уникальные возможности для проведения мероприятий, обеспечивая качественное обслуживание и индивидуальный подход к каждому клиенту. Наша команда профессионалов готова организовать события любого масштаба — от деловых встреч до масштабных праздников. У нас есть все необходимое для успешного мероприятия: современное оборудование, комфортные пространства и внимание к деталям. С нами каждое ваше событие станет незабываемым и продуманным до мелочей!</p>
              </div>
              <div className="col-6"> <img src={imgbanner} alt="" className='img2' /></div>
            </div>


            {/* Доступ к ресурсам */}

            <div className='member-body-img'>
              <div className="row">
                <div className="col-6">
                  <img src={bannerimg1} alt="" className='img3'/>
                </div>
                <div className="col-6">
                  <h1 className='member-body-title'>ДОСТУП К РЕСУРСАМ</h1>
                  <p className='member-body-text1'>Мы предоставляем широкий доступ к необходимым ресурсам, которые помогут вам достичь поставленных целей. Наша база знаний включает в себя информацию о лучших практиках, инструментах и технологиях, а также поддержку экспертов в вашей области. Благодаря этому вы сможете эффективно использовать имеющиеся возможности, оптимизировать процессы и принимать обоснованные решения. С нами вы всегда будете на шаг впереди!</p>
                </div>
              </div>

            </div>



            {/* Преимущества для сетевых возможностей */}

            <div className='member-main-img1'>
              <div className="row">
                <div className="col-6 block-description">
                  <h1 className='member-main-title1'>ПРЕИМУЩЕСТВА ДЛЯ СЕТЕВЫХ <span>ВОЗМОЖНОСТЕЙ</span></h1>
                  <p className='member-main-text1'>Мы создаем уникальные условия для развития сетевых возможностей, обеспечивая взаимодействие с ключевыми игроками в вашей отрасли. Наша платформа предоставляет доступ к профессиональным мероприятиям, семинарам и конференциям, где вы можете наладить полезные контакты и обменяться опытом. Сотрудничая с нами, вы получите возможность не только расширить свои деловые связи, но и повысить свою видимость на рынке, что откроет новые горизонты для вашего бизнеса. </p></div>
                <div className="col-6">
                  <img src={bannerimg2} alt="" className='img4' />

                </div>
              </div>
            </div>

          </div>



          {/* КАТЕРГОРИИ */}

          <h1 className='ctegory-text '>КАТЕРГОРИИ</h1>
           <div className="scroll">
          <div className="member-category">
           
            <div className="category-item">
              <img src={categoryimg1} alt="Студенты" className="category-img selected" />
              <p className="category-label">СТУДЕНТЫ</p>
            </div>
            <div className="category-item">
              <img src={categoryimg2} alt="Молодые специалисты" className="category-img" />
              <p className="category-label">МОЛОДЫЕ СПЕЦИАЛИСТЫ</p>
            </div>
            <div className="category-item">
              <img src={categoryimg3} alt="Профессионалы" className="category-img" />
              <p className="category-label">ПРОФЕССИОНАЛЫ</p>
            </div>
            <div className="category-item">
              <img src={categoryimg4} alt="Пенсионеры" className="category-img" />
              <p className="category-label">ПЕНСИОНЕРЫ</p>
            </div>
            </div>
          </div>
          
          
          


          {/* // пошаговая инструкция */}
     
     
          <h1 className='member-steps-title padding-top'>ПОШАГОВАЯ ИНСТРУКЦИЯ</h1>

          <div className='member-steps padding-bottom'>


            <div className="block"><h1 className='member-block-category-title'>ШАГ №1</h1><p className='member-block-category-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. </p></div>
            <div className="block"><h1 className='member-block-category-title'>ШАГ №1</h1><p className='member-block-category-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. </p></div>
            <div className="block"><h1 className='member-block-category-title'>ШАГ №1</h1><p className='member-block-category-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. </p></div>
            <div className="block"><h1 className='member-block-category-title'>ШАГ №1</h1><p className='member-block-category-text'>Lorem ipsum dolor sit amet consectetur. Sed porttitor amet aenean enim. </p></div>
          </div>

        </div>




      </div>
      
  )
}

export default Membership
