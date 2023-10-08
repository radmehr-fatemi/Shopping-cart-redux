import React, { useContext } from 'react';
import style from "./Store.module.scss";

//Context
import { ProductContext } from '../context/ProductContextProvider';

//Component
import ProductStore from './shared/ProductStore';

const Store = () => {

    const products = useContext(ProductContext)

    return (
        <div className={style.store}>
            {
                products.length ?

                products.map(product => <ProductStore key={product.id} productData={product} />) :
                
                <h1> Loading... </h1>    
            }

        </div>
    );
};

export default Store;