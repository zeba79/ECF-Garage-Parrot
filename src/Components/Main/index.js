import React from 'react'
import { styled } from 'styled-components'
import { Switch, Route} from 'react-router-dom/cjs/react-router-dom';
import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Horaires from '../Horaires';
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
          
          <Route component={About} path="/about" />
          <Route component={Services} path="/Services" />
          <Route component={Horaires} path="/horaires" />
          <Route component={Contact} path="/contact" />
          <Route component={Home} path="/" />
       
          </Switch>
      
      </div>
 

    </MainHeight>
  )
}

export default Main

const MainHeight = styled.div`
min-height: calc(100vh - 160px);
display:grid;
grid-gap: 5px;
grid-template-columns:1fr 3fr;

& .aside{
    color:green;
    background-color:lightgray;
    border-right: 1px solid #000;
}
& .mainPage{
    background-color:lightblue;
  

}
`;