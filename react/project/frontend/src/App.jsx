import React from 'react'
import {Route,Routes} from "react-router-dom"
import First from './components/first';
import Home from './pages/Home'; 
import About from './pages/About'
import Contact from './pages/Contact';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import State from './hooks/State';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/home" Component={Home}></Route>
      <Route path="/about" Component={About}></Route>
      <Route path="/contact" Component={Contact}></Route>
      <Route path="/service" Component={Service}></Route>
      <Route path="/state" element={<State/>}/> 
      
    </Routes>
    
    <First name = "lathika" department ="IT"
    skills = {['MERN','Java','HTML','CSS','JS']} projectsdone = {['hackthon 2024,2025','app devlopment-lightline',
      'mern stack project'
     ]}/>
    
    </>
    
  )
}

export default App;