import React from 'react';
import { styled } from 'styled-components';





function Header() {
  return (
    <Wrapper>
    Logo ici
      <nav>
        Les menus ici
      </nav>
        <div>
            Espace membre ici
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.div `
height : 80px;
margin: 5px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid black;


`;




export default Header