import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FacebookPicture from '../../assets/img/facebook.png';
import SnapPicture from '../../assets/img/snapchat.png';
import TwitterPicture from '../../assets/img/twitter.png'





function Footer() {
  return (
    <Wrapper>
      <div>
       La Politiqe de confidentialité ici
      </div>
      <div>
      <Link to="/user"> <img src= {FacebookPicture} alt='' className='facebook'/> </Link>
      <Link to="/user"> <img src= {SnapPicture} alt='' className='snap'/> </Link>
      <Link to="/user"> <img src= {TwitterPicture} alt='' className='twitter'/> </Link>
      </div>
      <div>
       Le CopyWright ici
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer `
height : 80px;
display: flex;
justify-content: space-around;
align-items: center;
border-top: 1px solid black;

& img{
  width : 5%;

};


`;




export default Footer