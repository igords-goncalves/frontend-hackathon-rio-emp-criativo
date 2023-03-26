import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from './pages/TelaLogin/TelaLogin';
import Home from './pages/Home/home';
import { FormLoginSuplier } from "./pages/FormLoginSuplier/FormLoginSuplier";
import { FormRegisterSuplier } from "./pages/FormRegisterSuplier/FormRegisterSuplier";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<TelaLogin/>} />
        <Route path="/loginAccess" element={<FormLoginSuplier />} />
        <Route path="/loginRegister" element={<FormRegisterSuplier />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
