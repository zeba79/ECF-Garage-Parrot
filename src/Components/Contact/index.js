import React from 'react'
import { styled } from 'styled-components'

function Contact() {
  return (

    <>
    <h2>Nous contacter : </h2>

    <Form>
      <fieldset>
        <legend>
          Merci de renseigner le formulaire :
        </legend>
        <div className='names'>
          <div>
          <label for='nom' >Nom :</label>
          </div>
          <div>
          <input type='text' id='nom' name='nom' required placeholder='Veuillez renseigner votre nom'/>
          </div>
        </div>
        <div  className='prenom'>
          <div>
          <label for='prenom' >Prénom :</label>
          </div>
          <div>
          <input type='text' id='prenom' name='prenom' required placeholder='Veuillez renseigner votre Prénom'/>
          </div>
        </div>
        <div className='email'>
          <div>
          <label for='email' >Email :</label>
          </div>
          <div>
          <input type='email' id='email' name='email'  required placeholder='Veuillez renseigner votre adresse mail'/>
          </div>
        </div>
        <div className='phone'>
          <div>
          <label for='telephone' >Téléphone :</label>
          </div>
          <div>
          <input type='tel' id='telephone' name='telephone'    required placeholder='Veuillez renseigner votre téléphone'/>
          </div>
        </div>
        <div className='btn'>
          <button className='send'>Envoyer</button>
          <button className='reinit'>Réinitialiser</button>
        </div>
      </fieldset>
    </Form>
    </>
  )
}

const Form = styled.form`
padding: 20px;
border: 1px solid #A01830;
background-color: #e6f5fe;
border-radius: 30px;
width: 70%;
height: 80%;
margin: auto;

  & legend, label{
    color : #A01830;
  
  }

  & div{
margin: 5px;
padding: 5px;
  }

  & legend{
    font-size: 1.2em;
      
  }

& input{
  padding: 20px;
  width: 100%;
  height: 30px;
}

& input:hover{
 border-radius: 10px;
 border: 2px solid #8BD3FC;
 box-shadow: 5px 3px 4px 0px;
}

& input:focus{
  border-radius: 10px;
  background-color: lightgray;
   box-shadow: 3px 4px 5px 6px;
 }
 

& .send, .reinit{
  color : #A01830;
  padding: 3px 20px;
  font-size: 1.1em;
  background-color: #cdecfe;
  border-radius: 30px;
}

& .btn{
display: flex;
justify-content: space-between;
align-items: center;
margin: 5px;
}

& button:hover{
color: #FFF;
background-color: #8BD3FC;
cursor: pointer;
}

@media (max-width: 600px)  {
  width: 70%;
  margin: auto;
  }

  & input{
    padding: 5px;
    margin:0px;
    display: block;
  }
  & .btn{
    display: block;
    margin: 5px;
    }

    & fieldset{
      border-radius: 30px;
      border: none;
      margin: 0px;     
    }

    
    
`;

export default Contact