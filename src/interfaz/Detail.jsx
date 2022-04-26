import React from 'react'
import {useContext} from 'react'
import { ProductContext } from '../negocio/context/Product/ProductContext'
import {deleteProduct} from '../datos/DeleteProduct'

const Detail = () => {


  const {selectedProduct, getProducts} = useContext(ProductContext)

  const handleDelete = (product) => {
    deleteProduct(product)
    getProducts()
  }

  

  return (
    <div>
      {selectedProduct ? (<div className="card card-body text-center"> 
        <img src={selectedProduct.img} alt="" className="card-img-top rounded-circle m-auto img-fluid" style={{width: 180}}/>
        <h1>{`${selectedProduct.name}`}</h1>
        <h3>Precio:  {`${selectedProduct.price}`}</h3>
        <button onClick={() => handleDelete(selectedProduct)} className="btn btn-danger">Borrar producto</button>
      </div>) : (<h1 style={{textAlign: 'center'}}>No product selected</h1>)}
    </div>
  )
}

export  {Detail}