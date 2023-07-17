import React from 'react'
import { styled } from 'styled-components'

function Contact() {
  return (

    <>
    <h2>Nous contacter </h2>

    <Form>
      <fieldset>
        <legend>
          Merci de renseigner le formulaire
        </legend>
        <div>
        <label for='nom' >Nom :</label>
        <input type='text' id='nom' name='nom' size="50" required placeholder='Veuillez renseigner votre nom'/>
        </div>
        <div>
        <label for='prenom' >Prénom :</label>
        <input type='text' id='prenom' name='prenom' size="50" required placeholder='Veuillez renseigner votre Prénom'/>
        </div>
        <div>
        <label for='email' >Email :</label>
        <input type='email' id='email' name='email' pattern=".+@globex\.com" size="50" required placeholder='Veuillez renseigner votre adresse mail'/>
        </div>
        <div>
        <label for='telephone' >Téléphone :</label>
        <input type='number' id='telephone' name='telephone'  size="50" required placeholder='Veuillez renseigner votre téléphone'/>
        </div>
        <div>
          <button>Envoyer</button>
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


& fieldset{
  border: 1px solid #A01830;
    border-radius: 30px;
  }

  & legend, label{
    color : #A01830;
  }

& input{
  margin: 10px;
  padding: 10px;
}

& button{
  color : #A01830;
  padding: 5px;
  font-size: 1.2em;
  background-color: #b4e2fd;
  border-radius: 30px;
}

& button:hover{
color: #FFF;
background-color: #8BD3FC;
cursor: pointer;
}
`;

export default Contact