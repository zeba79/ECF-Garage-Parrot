import React from 'react';
import  styled  from 'styled-components';
import {Link} from 'react-router-dom/cjs/react-router-dom'

function Header() {
  return (
   
      <Wrapper><h1>Notre page</h1>
        <nav>
        <Link to="/" >Accueil </Link>
        <Link to="/about">Actualités </Link>
        <Link to="/services" > Nos Services</Link>
        <Link to="/horaires" > Horaires</Link>
        <Link to="/contact" > Nous contacter</Link>
           </nav>
      </Wrapper>
  
  )
}

const Wrapper = styled.header `
height : 80px;
display: flex;
justify-content: space-around;
align-items: center;
border-bottom: 1px solid black;

& img{
  width : 10%;
  height: 60%;
};
& a{
  text-decoration: none;
  color: inherit;
  margin: 5px;
}



`;





export default Header