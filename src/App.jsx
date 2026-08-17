import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Contact from './Pages/Contact'
import Mycart from './Pages/Mycart'
function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='mens' element={<Mens/>}/>
        <Route path='womens' element={<Womens/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='mycart' element={<Mycart/>}/>

      </Route>
    </Routes>
  </BrowserRouter>

  

  </>
  )
}

export default App