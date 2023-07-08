import React from 'react'
import {styled} from 'styled-components'
import GlobalStyle from './GlobalStyle';
import Header from '../Components/Header';
import Footer from './Footer';
import Main from './Main'



function Layout() {
  return (
    <Wrapper>
      <GlobalStyle/>
      <Header/>
      <Main>
     </Main>
      <Footer/>
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div `
`;

