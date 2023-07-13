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

      <div className='openHour'>
        <h2>Horaire d'ouvertures</h2>
       <p>
        Lundi à Jeudi : 8h00 - 12h00 et 13h30-18h00
        </p>
        <p>
        Vendredi : 8h00 - 12h00 et 13h30-16h00
        </p>
        <p>
        Samedi : 8h00 - 12h00
        </p>
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
background-color:	#e6f5fe;


& img{
  width : 10%;
  margin: 0px 20px ;
};

& .socialNetwork{
  width:30%;
  text-align: center;
}

& .adress{
  width:40%;
  text-align: center;
 
}
& .openHour{
  width:20%;


  & h2{
    text-align: center;
    border-bottom: 1px solid;
  }
}





`;




export default Footer