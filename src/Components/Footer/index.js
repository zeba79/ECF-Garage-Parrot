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

const Wrapper = styled.footer `
height : 80px;
display: flex;
justify-content: space-around;
align-items: center;
border-top: 1px solid black;


`;




export default Footer