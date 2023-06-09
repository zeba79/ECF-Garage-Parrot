import React from 'react'
import { styled } from 'styled-components'
import { Switch, Route} from 'react-router-dom/cjs/react-router-dom';
import Home from '../Home';
import Mecanique from '../Mecanique';
import Occasions from '../Occasions';
import Carrosserie from '../Carrosserie';
import Contact from '../Contact'
function Main() {
  return (
    <MainHeight>
      <div className='aside'>
        <h2>
        Notre service Voitures d'occasions
        </h2>
       
      </div>
        
      <div className='mainPage'>
        <Switch>
          
          <Route component={Mecanique} path="/mecanique" />
          <Route component={Occasions} path="/occasions" />
          <Route component={Carrosserie} path="/carrosserie" />
          <Route component={Contact} path="/contact" />
          <Route component={Home} path="/" />
       
          </Switch>
      
      </div>
 

    </MainHeight>
  )
}

export default Main

const MainHeight = styled.div`
min-height: calc(100vh - 180px);
display:grid;
grid-gap: 5px;
grid-template-columns:1fr 3fr;

& .aside{
    color:green;
    background-color: #b4e2fd;
    border-radius:30px;
    margin: 5px 0px;
    padding: 20px
}
& .mainPage{
    background-color:	#cdecfe;
    border-radius:30px;
    margin: 5px 0px;
    padding: 20px
  

}
`;