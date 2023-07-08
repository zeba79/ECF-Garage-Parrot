import React from 'react';
import { styled } from 'styled-components';

function Header() {
  return (
   
      <Wrapper>
        <h1>Supper Header</h1>
  
      </Wrapper>
  
  )
}

const Wrapper = styled.header `
height : 80px;
width: 100%;
margin: 5px 20px;
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