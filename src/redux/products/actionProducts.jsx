import axios from "axios";

export const fetchProductsRequest = () => {
    return { type : "FETCH_PRODUCT_REQUEST" }
}

export const fetchProductsSuccess = data => {
    return { type : "FETCH_PRODUCT_SUCCESS" ,payload : data  }
}

export const fetchProductsFailure = error => {
    return { type : "FETCH_PRODUCT_FAILURE" ,payload : error  }
}

export const fetchProducts = () => {
    return ( dispatch ) => {
        dispatch( fetchProductsRequest() )

        axios
        .get("https://fakestoreapi.com/products")
        .then( response => dispatch( fetchProductsSuccess( response.data ) ) )
        .catch( error => dispatch( fetchProductsFailure( error.message ) ) )
    }
}



