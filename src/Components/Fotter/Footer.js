import React from 'react';
import { styled } from 'styled-components';





function Footer() {
  return (
    <Wrapper>
      <div>
       La Politiqe de confidentialité ici
      </div>
      <div>
       Les réseaux sociaux ici
      </div>
      <div>
       Le CopyWright ici
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div `
height : 80px;
margin: 5px 20px;
display: flex;
justify-content: space-between;
align-items: center;
border-top: 1px solid black;


`;




export default Footer