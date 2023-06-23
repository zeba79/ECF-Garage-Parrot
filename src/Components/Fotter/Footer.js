import React from 'react';
import { styled } from 'styled-components';





function Footer() {
  return (
    <Wrapper>
      <nav>
       Les réseaux sociaux ici
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div `
height : 80px;
margin: 5px;
display: flex;
justify-content: space-between;
align-items: center;
border-top: 1px solid black;


`;




export default Footer