import React, { createContext } from 'react'
import { Route, Routes } from "react-router-dom"
import First from './components/first'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Navbar from './components/Navbar'
import State from './hooks/State'
import Effect from './hooks/Effect'
import Parent from './components/Parent'
import Form from './hooks/Form'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Reducer from './hooks/Reducer'


export const userContext=createContext()

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/reducer" element = {<Reducer/>} />
      </Routes>

      {/*<Form />

      <First 
        name="lathika" 
        department="IT"
        skills={['MERN','Java','HTML','CSS','JS']}
        projectsdone={[
          'hackathon 2024,2025',
          'app development-lightline',
          'mern stack project'
        ]}
      />*/}
    </>
  )
}

export default App
