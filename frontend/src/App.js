import React from 'react'

import Navbar from './Components/Navbar'
import Registration from './Pages/Registration'
import Login from './Pages/Login'

import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Registration/>}/>
      <Route path='/login' element
      ={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App