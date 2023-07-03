import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { styled } from 'styled-components';
import image from '../../assets/img/logo.png'
import userPicture from '../../assets/img/user.png';
import newsletterPicture from '../../assets/img/newsletter.png';
import favoritePicture from '../../assets/img/favorite.png';






function Header() {
  return (
    <Router>
      <Wrapper>
        <img src= {image} alt=''/>   
          <Nav>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">Actualités</Link></li>
            <li><Link to="/topics">Services</Link></li>
            <li><Link to="/topics">Nous contacter</Link></li>
          </Nav>
        <div>
          <img src ={userPicture} alt=''/>
          <img src= {newsletterPicture} alt='' />
          <img src={favoritePicture} alt='' />
        </div>
      </Wrapper>
    </Router>
  )
}

const Wrapper = styled.nav `
height : 80px;
margin: 5px 20px;
display: flex;
justify-content: space-evently;
align-items: center;
border-bottom: 1px solid black;

& img{
  width : 5%;
  height: 60%;
}

`;

const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
list-style:none;


  & li{
    margin: 20px;
    background: lightgray;
    padding: 10px;
    border-radius:25px;
 
  };
  & Link{
    color: white;
  };

`;




export default Header