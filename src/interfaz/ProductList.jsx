import React, {useEffect} from 'react'
import {useContext} from 'react'
import { ProductContext } from '../negocio/context/Product/ProductContext'

const ProductList = () => {

    const {products, getProducts, getProfile } = useContext(ProductContext)

    useEffect(() => {
        getProducts();
    }, [])

  return (
    <div className="list-group h-100">
      {
        products.map((product) => (
          <a className="list-group-item list-group-item-action d-flex flex-row justify-content-start" href="#!" key={product.id} 
          onClick={() => getProfile(product.id)}>
           <img src={product.img} alt='F' className="img-fluid mr-4 rounded-circle" width="70 "/>
           <p>{`${product.name}`}</p>
          </a>
        ))
      }
    </div>
  )
}

export  {ProductList}