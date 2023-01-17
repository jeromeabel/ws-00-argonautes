import React, { useState } from "react";
import API from '../utils/api';
import Error from './Error';

import { checkName , getNormalizedString, capitalizeFirstChar } from '../utils/helpers'

function ArgoForm({data, setData}) {
 
  const [argoName, setArgoName] = useState('')
  const [error, setError] = useState(null)

  // Add a new Argonaute
  async function onSubmit(e) {
    e.preventDefault();

    const isValidName = checkName(argoName)

    // Check number of items
    if ( data.length < 50) {

      // Check Valid String
      if (isValidName) {
        //const normalizedName = getNormalizedString(argoName);
        const normalizedName = argoName.toLowerCase().trim();
        const newName = capitalizeFirstChar(normalizedName);

        // POST request
        API.post('/add', {name:newName} )
        .then(response => {
            setData([...data, response.data]);
            setArgoName("");
            setError(null)
        })
        .catch( (err) => {
          setError(err.message)
        });
      } else  {
        setError("Veuillez entrer un nom valide.")
      }
    } else  {
      setError("L'Argo est limité à 50 personnes.")
    }
  }

  return (
    <section className="py-5 border-bottom">
      <div className='container' style={{ maxWidth:"1000px"}}>
      <h2>Ajouter un⸱e Argonaute</h2>
      <form 
        onSubmit={onSubmit}
        className="d-flex g-3 align-items-center justify-content-between">
        <div className="flex-fill">
          <label className="visually-hidden" htmlFor="name-field">name</label>
          <div className="input-group ">
            <div className="input-group-text">Nom</div>
            <input 
              type="text" 
              id="name-field"
              className="form-control form-control-lg" 
              placeholder="Charalampos"
              value={argoName}
              onChange={event => {
                setArgoName(event.target.value);
              }}
              required
              pattern="[A-ÿ\-\s]{3,32}"
              title="Veuillez écrire au moins trois caractères"
              />
          </div>
        </div>
        
        <button type="submit" className="ms-2 btn btn-primary btn-lg">Ajouter</button>

      </form>
    </div>

    { error && 
          <Error 
            messageFr="Il y a eu un problème lors de l'envoie de la donnée" 
            messageAuto={error} />
      }
    
    </section>
  );
}

export default ArgoForm;