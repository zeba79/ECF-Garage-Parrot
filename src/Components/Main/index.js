import React from 'react'
import { styled } from 'styled-components/macro'
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
        <h3>
        Notre service Voitures d'occasions :
        </h3>

        <form>
          <fieldset>
            <legend>
            Faites votre choix :
            </legend>
        <label for="volume">Kilométrage</label>
        <input type="range" id="kilometrage" name="kilometrage" min="0" max="350000"/>
        <input type="number" id="minNum" name="minNum" min="0" max="350000"/>
        <input type="number" id="maxNum" name="maxNum" min="0" max="350000"/>
        </fieldset>
        </form>
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
display:grid;
grid-gap: 5px;
grid-template-columns:1fr 3fr;

& .aside{
    color:green;
    background-color: #b4e2fd;
    border-radius:30px;
    margin: 5px 0px;
    padding: 20px

    & input {
      margin: 5px;
    }
   
}


& .mainPage{
    background-color:	#cdecfe;
    border-radius:30px;
    margin: 5px 0px;
    padding: 20px
  

}
@media (max-width: 600px) {
  display: inline-block;
`;