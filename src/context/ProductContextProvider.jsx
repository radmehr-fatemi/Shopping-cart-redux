import React ,{ useContext ,useEffect ,useState ,createContext } from 'react';

//ProductsURL
import { getProducts } from '../server/api';

//Context
export const ProductContext = createContext();


const ProductContextProvider = ({ children }) => {

    const [ products ,setProducts ] = useState([])
    
    useEffect(() => {
        const fetchAPI = async () => {
            setProducts( await getProducts() )
        }
        fetchAPI()
    } ,[])
    
    return (
        <div>
            <ProductContext.Provider value={products}>
                    { children }
            </ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;