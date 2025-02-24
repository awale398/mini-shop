import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navigation/Navbar'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Contact from './pages/Contact/Contact'
import Cart from './pages/Cart/Cart'
import Signup from './pages/LoginSignup/Signup'
import Login from './pages/LoginSignup/Login'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path = '/' element = { <Home/> }/>
      <Route path = '/Products' element = {<Products/>}/>
      <Route path = '/Contact' element = {<Contact/>}/>
      <Route path = '/Cart' element = {<Cart/>}/>
      <Route path = '/Login' element = {<Login/>}/>
      <Route path = '/Signup' element= {<Signup />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
