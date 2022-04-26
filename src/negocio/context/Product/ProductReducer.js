import { GET_PRODUCTS, GET_PROFILE } from "../types";

//Payload son los datos que esten pasando en la función
//Payload es como decir data
export default (state, action) => {
    const {payload, type} = action;

    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case GET_PROFILE:
            return {
                ...state,
                selectedProduct: payload
            }
        default:
            return state;
    }
}
