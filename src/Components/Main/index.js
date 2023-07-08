import React from 'react'
import { styled } from 'styled-components'

function Main() {
  return (
    <MainHeight>
      <div className='aside'>Aside</div>
      <div className='mainPage'> Main Page</div>

    </MainHeight>
  )
}

export default Main

const MainHeight = styled.div`
min-height: calc(100vh - 160px);
display:grid;
grid-template-columns:1fr 2fr;

& .aside{
    color:green;
    background-color:lightgray;
}
& .mainPage{
    background-color:lightblue;
}
`;