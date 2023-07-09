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
        <div>

      <img src= {LogoPicture} alt='' className='logo' /> 
        </div>
        <Nav>  
          <Link to="/">Accueil </Link>
          <Link to="/about">Actualités </Link>
          <Link to="/services">Nos Services</Link>
          <Link to="/horaires">Horaires</Link>
          <Link to="/contact">Nous contacter</Link>
        </Nav>
        <div className='memberSpace'>
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
align-items: center;
border-bottom: 1px solid black;
background-color:#8BD3FC;
border-radius:30px;


& nav a{
  text-decoration: none;
  color:#A01830;
  margin: 10px;
  padding: 10px;
}

& nav a:hover{
  color: #FFF;
  background-color: #8BD3FC;
  border-radius:20px;
}

& .logo{
  width: 30%;
  margin: 10px;
  border-radius:20px;
}

& .memberSpace{
  width:10%;
 
}

& .memberSpace img{
  width: 30%;
}
`;


const Nav = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
width: 80%;
background-color: #D9D9D9;
border-radius: 30px;



`;


export default Header