import Partners from '../../../../usta/src/Shared/Components/Partners/Partners'
import Index from './ui/index'
import Slider from './ui/Slider';
import './Community.scss'


function Community() {
  
  return (
    <div className='community'>
      <div className='banner'>
          <div className="container">
            <div className="content-head">
            <p className="content-head-p">
              “USTA International” 
              вдохновляет и направляет 
              людей в сфере инженерии. 
              Мы делаем инженерный подход 
              понятным и привлекательным, 
              чтобы каждый мог найти себя в этой 
              профессии и реализоваться
            </p>
            </div>
          </div>
      </div>
      <div className="container">
        
        <Slider />
        <Partners />
        <Index />
      </div>
    </div>
      
    
  )
}

export default Community
