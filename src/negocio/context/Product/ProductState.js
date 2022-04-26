import React, {useReducer} from 'react'
import ProductReducer from './ProductReducer'
import { ProductContext } from './ProductContext'
import {getElements} from '../../../datos/GetProducts'

const ProductState = (props) => {

    const initialState  = {
        products:[],
        selectedProduct : null,
    }
    const [state, dispatch] = useReducer(ProductReducer, initialState)

    const getProducts = async () => {
        const productos = await getElements()
        dispatch({
            type:'GET_PRODUCTS',
            payload: productos
        })
    }

    const getProfile = async (id) => {
        const productos = state.products
        const productoSeleccionado = productos.find(producto => producto.id === id)
        dispatch({
            type:'GET_PROFILE',
            payload: productoSeleccionado
        })
    }

    return (
        <ProductContext.Provider value={{
            products: state.products,
            selectedProduct: state.selectedProduct,
            getProducts,
            getProfile
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export  {ProductState}


