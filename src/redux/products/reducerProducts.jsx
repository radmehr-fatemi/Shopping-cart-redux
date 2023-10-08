const initialState = {
    loading : false,
    products : [],
    error : ""
}

const reducerProducts = ( state = initialState ,action ) => {
    switch( action.type ) {
        case "FETCH_PRODUCT_REQUEST":
            return {
                loading : true,
                products : [],
                error : ""
            }
        case "FETCH_PRODUCT_SUCCESS":
            return {
                loading : false,
                products : action.payload,
                error : ""
            }
        case "FETCH_PRODUCT_FAILURE":
            return {
                loading : false,
                products : [],
                error : action.payload
            }
        default:
            return state
    }
}

export default reducerProducts