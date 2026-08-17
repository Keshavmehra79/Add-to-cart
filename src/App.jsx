import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Contact from './Pages/Contact'
import Mycart from './Pages/Mycart'
import Gobackhome from './Pages/Gobackhome'
import Navbar from './Pages/Navbar'
import Search from './Pages/Search'
function App() {
  return (<>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>} />
        <Route path='mens' element={<Mens/>}/>
        <Route path='womens' element={<Womens/>}/>
        <Route path='goback' element={<Gobackhome/>}/>
        <Route path='mycart' element={<Mycart/>}/>
        <Route path='search' element={<Search/>}/>

      </Route>
    </Routes>
  </BrowserRouter>

  

  </>
  )
}

export default App