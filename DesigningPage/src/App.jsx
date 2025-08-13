import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Rooms from './Components/Rooms'
import Resturant from './Components/Resturant'
import Tariff from './Components/Tariff'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import TermsAndConditions from './Components/TermsandConditions'
import HouseRules from './Components/HouseRules'
import Packages from './Components/Packages'
import SuitePage from './Components/Suite'
import SuperiorPage from './Components/Superior'
import DulexPage from './Components/Delux'


const App = () => {
  return (
   <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms/>} />
          <Route path='/resturant' element={<Resturant/>} />
          <Route path='/tariff' element={<Tariff/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/termsandconditions' element={<TermsAndConditions/>} />
          <Route path='/house-rules' element={<HouseRules/>} />
          <Route path='/packages' element={<Packages/>} />
          <Route path='/suitepage' element={<SuitePage/>} />
          <Route path='/superiorpage' element={<SuperiorPage/>} />
          <Route path='/dulexpage' element={<DulexPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App