import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png'; // Ajuste o caminho se necessário
import HomeImage from '../img/killmeplz.png';
import HomeImage2 from '../img/ihatethembastards.png'


function Home() {
  return (
    
    <div className="home-container">
      <header className="header">
        <img src={Logo} alt="Logo" className="logo" />
      </header>
      <main className="main-content">
        <h1 className='bigger'>Nós estamos ansiosos para te ter aqui!</h1>
        <div className="image-container1">
          <img src={HomeImage} alt="Totem" className="main-image" />
        </div>
        <div className="image-container2">
          <img src={HomeImage2} alt="Cachorro" className="main-image2" />
        </div>
        <div className="yapping">
          
          <p>A pousada Quinta do Ypuã oferece ao seus clientes um recanto de aconchego e lazer, em ambiente rústico e agradável. Ideal para quem gosta de fugir da rotina e procura um local de paz para descansar e curtir a natureza. "O Ypuã tem tudo a ver com a natureza, dá para sentir a energia do lugar. Eu me preocupo se você vai comer bem, dormir bem e se vai se sentir em casa. Vou te mostrar onde encontrar os melhores frutos do mar, onde curtir a melhor praia e as melhores ondas. Mas se você não quiser fazer nada eu também conheço o melhor lugar." HEITOR, Anfitrião da pousada</p>
        </div>
      </main>        
        
      
    




      





      
      
    </div>
    
  );
}

export default Home;



/* ---VAI SER UTIL CASO O CABEÇALIO NÃO TIVER PRONTO---
       //<form className="navigation-form">
          <p className='navigation-p'><Link to='/cadastro' className='link2'>Cadastrar</Link></p>
          <p className='navigation-p'><Link to='/login' className='link2'>Login</Link></p>
          <p className='navigation-p'> <Link to='/sobre' className='link2'>Sobre</Link></p>
        </form>//
        */