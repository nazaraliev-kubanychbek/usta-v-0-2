import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Shared/Components/Header/Header';
import Footer from '../Shared/Components/Footer/Footer';
import Home from '../Pages/Home/Home';
import Ambassadorship from '../Pages/Ambassadorship/Ambassadorship';
import Community from '../Pages/Community/Community';
import Education from '../Pages/Education/Education';
import Events from '../Pages/Events/Events';
import Membership from '../Pages/Membership/Membership';
import Participation from '../Pages/Participation/Participation';
import Services from '../Pages/Services/Services';
import './App.scss'

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/ambassadorship" element={<Ambassadorship/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/membership" element={<Membership />}/>
        <Route path="/participation" element={<Participation />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
