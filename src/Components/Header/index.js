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
          <Link to="/mecanique">Mécanique Générale </Link>
          <Link to="/carrosserie">Carrosserie</Link>
          <Link to="/occasions">Véhicules d'Occasions</Link>
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

const Wrapper = styled.div `
height : 80px;
display: flex;
align-items: center;
justify-content: space-around;
border-bottom: 1px solid black;
background-color:#8BD3FC;
border-radius:30px;

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
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
width: 80%;
background-color: #D9D9D9;
border-radius: 30px;

& a:hover{
  transition: linear 0.25s;
  color: #FFF;
  background-color: #8BD3FC;
  border-radius:20px;
}

& a{
  text-decoration: none;
  color:#A01830;
  margin: 10px;
  padding: 10px;
}





`;


export default Header