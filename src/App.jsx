import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Cadastro from './páginas/cadastro';
import Login from './páginas/login';
import Home from './páginas/home';
import Sobre from './páginas/sobre';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
        <Route path="sobre" element={<Sobre />} />
      </Routes>
    </div>
  );
}
