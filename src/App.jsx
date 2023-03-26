import React from "react";
import TelaLogin from "./Pages/TelaLogin/TelaLogin";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormLoginSuplier } from "./pages/FormLoginSuplier/FormLoginSuplier";
import { FormRegisterSuplier } from "./pages/FormRegisterSuplier/FormRegisterSuplier";
import TelaCircuito from "./Pages/TelaCircuito/TelaCircuito";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<TelaLogin/>} />
        <Route path="/loginAccess" element={<FormLoginSuplier />} />
        <Route path="/loginRegister" element={<FormRegisterSuplier />} />
        <Route path="/circuito" element={<TelaCircuito />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
