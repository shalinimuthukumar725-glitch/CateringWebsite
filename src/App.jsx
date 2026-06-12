import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'

import Services from './Components/Services'
import Home from './Components/Home'
import About from './Components/About'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Gallery from  './Components/Gallery'
import Menu from './Components/Menu'
import EventMenu from './Components/EventMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
   <Navbar/>

   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/menu' element={<Menu/>}/>
     {/* <Route path='/menu:eventMenu' element={<EventMenu/>}/> */}
   </Routes>

   <Footer/>
   </BrowserRouter>


   </>
  )
}

export default App
