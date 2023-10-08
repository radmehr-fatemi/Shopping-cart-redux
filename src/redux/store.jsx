import { createStore ,applyMiddleware } from "redux";
import thunk from "redux-thunk";

//reducer
import rootReducer from "./rootReducer";
import reducerProducts from "./products/reducerProducts";

const store = createStore( rootReducer ,applyMiddleware( thunk ) )
export default store