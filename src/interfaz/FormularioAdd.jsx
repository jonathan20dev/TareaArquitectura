import React, { useState } from "react";
import { v4 as uuid } from "uuid"; //el as se aplica como en SQL
import {addProducto} from '../datos/AddProduct'
import { ProductContext } from '../negocio/context/Product/ProductContext'
import {useContext} from 'react'

const FormularioAdd = ({ dispatch }) => {
  const [data, setData] = useState({ name: "",  img: "", price: ""});

  const { name, img,price } = data; //desetructurar data
  const {getProducts} = useContext(ProductContext)

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const handleAdd = () => {
    addProducto(data)
    getProducts()
  };

  return (
    <>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Nombre:{" "}
          <input
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </label>

        <label className="mx-1 d-grid gap-2">
          Url imagen:{" "}
          <input
            onChange={handleChange}
            name="img"
            value={img}
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </label>

        <label className="mx-1 d-grid gap-2">
          Precio:{" "}
          <input
            onChange={handleChange}
            value={price}
            name="price"
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </label>

        <div className="mx-1 d-grid gap-2">
          <button onClick={handleAdd} className="btn btn-info mt-2">
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

export default FormularioAdd;
