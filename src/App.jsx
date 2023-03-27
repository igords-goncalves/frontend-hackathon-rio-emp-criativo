import React from 'react'
import Home from './pages/Home/Home'
import Filter from './components/Filter/filter'
import TelaLogin from './pages/TelaLogin/TelaLogin'
import TelaCircuito from './pages/TelaCircuito/TelaCircuito'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormLoginSuplier } from './pages/FormLoginSuplier/FormLoginSuplier'
import { FormRegisterSuplier } from './pages/FormRegisterSuplier/FormRegisterSuplier'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<TelaLogin />} />
        <Route path='/loginAccess' element={<FormLoginSuplier />} />
        <Route path='/loginRegister' element={<FormRegisterSuplier />} />
        <Route path='/circuitos' element={<TelaCircuito />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
