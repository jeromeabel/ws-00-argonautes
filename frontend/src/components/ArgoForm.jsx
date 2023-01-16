import React, { useState } from "react";
import axios from 'axios';

function ArgoForm({data, setData}) {
 
  const [name, setName] = useState('')

  // Add a new Argonaute
  async function onSubmit(e) {
    e.preventDefault();
    const newArgonaute = {name};
    axios.post('http://localhost:3000/api/add', newArgonaute)
    .then(response => {
        setData([...data, response.data]);
        setName("");
    });
  }

  return (
    <section className="py-5">
      <div className='container mx-auto w-50'>
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
              value={name}
              onChange={event => {
                setName(event.target.value);
              }}
              />
          </div>
        </div>
        
        <button type="submit" className="ms-2 btn btn-primary btn-lg">Ajouter</button>

      </form>
    </div>
    </section>
  );
}

export default ArgoForm;