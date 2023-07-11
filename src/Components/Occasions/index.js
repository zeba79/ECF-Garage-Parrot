import React from 'react'
import { styled } from 'styled-components';
import Car1 from '../../assets/img/Car1.jpg'


function Occasions() {
  return (
      <Grid>  
        <div className='car car1' >
          <p className='price'>
          25 000 €
          </p>
          <img src= {Car1} alt=''/>
          <p className='description'>FORD</p>
          <button>En savoir plus</button>
          </div> 
        <div className='car' >Car2</div>  
        <div className='car' >Car3</div>
        <div className='car' >Car4</div>  
        <div className='car' >Car5</div>  
        <div className='car' >Car6</div>        
      </Grid>

  )
}

export default Occasions


const Grid = styled.div`
display:grid;
grid-gap: 10px;
grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows: 1fr 1fr;
border: solid 1px ;
border-radius: 30px;
text-align: center;

& .car{
  border: 1px solid;
  padding: 5px;
  
}

& .car1 img{
  width: 100%;
  height: 70%;

}
& .price {
  position: absolute;
  margin: 5px 0 0 5px;
  z-index: 5;
  border: 1px solid red;
  color : #FFF;
  background-color:#936D6D;
  border-radius: 30px;
  padding: 5px;
  font-size: 1.5em;

}

`;