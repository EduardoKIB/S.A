import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cadastro from './páginas/cadastro';
import Login from './páginas/login';
import Home from './páginas/home';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
