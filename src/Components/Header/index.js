import React from 'react';
import  styled  from 'styled-components';
import {Link} from 'react-router-dom/cjs/react-router-dom'
import LogoPicture from '../../assets/img/logo.png';
import UserPicture from '../../assets/img/user.png';
import FavoritePicture from '../../assets/img/favorite.png';
import NewsletterPicture from '../../assets/img/newsletter.png'

function Header() {
  return (
   
      <Wrapper>
        
      <img src= {LogoPicture} alt='' className='logo' /> 
        <Nav>
        <Link to="/">Accueil </Link>
        <Link to="/about">Actualités </Link>
        <Link to="/services">Nos Services</Link>
        <Link to="/horaires">Horaires</Link>
        <Link to="/contact">Nous contacter</Link>
        </Nav>
        <div>
          <Link to="/user"> <img src= {UserPicture} alt='' className='user'/> </Link>
          <Link to="/favorite"><img src= {FavoritePicture} alt='' className='favorite'/></Link>
          <Link to="/newsletter"><img src= {NewsletterPicture} alt='' className='newsletter'/></Link>   
        </div>
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
  width : 5%;
  height: 50%;
};
& a{
  text-decoration: none;
  color: inherit;
  margin: 10px;
}

& nav a:hover{
  color: #FFF;
  background-color: lightblue;
  border-radius:20px;
}

`;


const Nav = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;

`;


export default Header