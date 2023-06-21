import React from 'react'
import { styled } from 'styled-components'


function Header() {
  return (
    <Wrapper>
        <img src='' alt='logo'>Logo ici</img>
        <nav>
            Menus ici
        </nav>
        <div>
            Espace membre ici
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.div `
height : 80px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid black;


`;


export default Header