import React, { useEffect, useReducer, useState } from "react";
import { ContactosReducer } from "../negocio/ContactosReducer";
import FormularioAdd from "./FormularioAdd";


const init = () => {
  const contactos = localStorage.getItem("contactos");

  return contactos ? JSON.parse(contactos) : []; //se pasa a JSON, localstorage solo almacena string
};

const AddProduct = () => {
  const [state, dispatch] = useReducer(ContactosReducer, [], init); //el reducer, initial state, jalar datos de una API o localstorage

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state)); //Key, string
  }, [state]);

  const [formView, setFormView] = useState(false);

  return (
    <div className="container mt-3">
      <button
        onClick={() => setFormView(!formView)}
        className="btn btn-success"
      >
        {!formView ? "+ Agregar Producto" : "- Cerrar Formulario"}
      </button>
      
      {formView && <FormularioAdd dispatch={dispatch} />}
    </div>
  );
};

export {AddProduct};
