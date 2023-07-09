import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FacebookPicture from '../../assets/img/facebook.png';
import SnapPicture from '../../assets/img/snapchat.png';
import TwitterPicture from '../../assets/img/twitter.png'





function Footer() {
  return (
    <Wrapper>
      <div className='socialNetwork'>
      <Link to="/user"> <img src= {FacebookPicture} alt='' className='facebook'/> </Link>
      <Link to="/user"> <img src= {SnapPicture} alt='' className='snap'/> </Link>
      <Link to="/user"> <img src= {TwitterPicture} alt='' className='twitter'/> </Link>
      </div>

      <div className='copyWright'>
       CopyWright Juillet - 2023
      </div>
      <div className='adress'>
      <p>
        Garage Vincent PARROT
      </p>
      <p>
        45 Rue de la liberté
      </p>
      <p>
        91003 Evry
      </p>
      </div>
 
    </Wrapper>
  )
}

const Wrapper = styled.footer `
height : 80px;
display:flex;
align-items: center;
border-radius: 30px;
background-color:#8BD3FC;


& img{
  width : 10%;
};

& .socialNetwork{
  width:40%;
  text-align: center;
}

& .adress{
  width:40%;
  text-align: center;
 
}
& .copyWright{
  width:20%;
  text-align: center;
}





`;




export default Footer