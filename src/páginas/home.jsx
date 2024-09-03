import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <h1>home</h1>
    <form action="form">
        <p>Tela de cadastro <Link to='/cadastro' className='link'>Entrar</Link></p>
        <p>Tela de login <Link to='/login' className='link'>Entrar</Link></p>
        <p>Tela de sobre <Link to='/sobre' className='link'>Entrar</Link></p>
    </form>
    </>
  )
}

export default Home