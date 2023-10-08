import { combineReducers } from "redux" 

//Reducer
import reducerProducts from "./products/reducerProducts"
import reducerCart from "./cart/reducerCart"

const rootReducer = combineReducers({
    stateProducts : reducerProducts,
    stateCart : reducerCart
})

export default rootReducer