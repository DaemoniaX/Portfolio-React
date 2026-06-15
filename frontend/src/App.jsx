import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import PanelCard from './components/PanelCard.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import CV from './pages/CV.jsx'
import Graphs from './pages/Graphs.jsx'
import Kiduland from './pages/Kiduland.jsx'
import NavBar from './components/NavBar.jsx'
import Backend from './pages/Backend.jsx'
import ZuulBad from './pages/ZuulBad.jsx'
import React from './pages/React.jsx'
import Scripting from './pages/Scripting.jsx'

function App() {
  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CV' element={<CV />} />
          <Route path='/graphs' element={<Graphs />} />
          <Route path='/kiduland' element={<Kiduland />} />
          <Route path='/backend' element={<Backend />} />
          <Route path='/zuulbad' element={<ZuulBad />} />
          <Route path='/react' element={<React />} />
          <Route path='/scripting' element={<Scripting />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
