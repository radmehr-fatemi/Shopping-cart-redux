import React, { useEffect } from 'react';
import style from "./Store.module.scss";
import { useSelector ,useDispatch } from "react-redux"; 

//dispatch
import { fetchProducts } from '../redux/products/actionProducts';

//Component
import ProductStore from './shared/ProductStore';

const Store = () => {

    const dispatch = useDispatch();
    const state = useSelector( state => state.stateProducts );

    useEffect( () => {
       !state.products.length && dispatch( fetchProducts() )
    } ,[])

    return (
        <div className={style.store}>
            {
                state.loading ?
                <h1> Loading... </h1> :
                
                state.error ?
                <h1> Sorry, there is a error </h1> :

                state.products.map(product => <ProductStore key={product.id} productData={product} />) 
                
            }

        </div>
    );
};

export default Store;