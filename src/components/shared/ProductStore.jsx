import React, { useContext } from 'react';
import style from "./ProductStore.module.scss";
import { Link } from "react-router-dom";

//SVG
import trashSVG from '../../assets/trash.svg';

//function
import { findQuantity, shorter, shorterLetters } from '../../helper/function';
import { isItThere } from '../../helper/function';

//Context
import { CartContext } from '../../context/CartContextProvider';

const ProductStore = ({ productData }) => {

    const { image, title, price, category, description, id } = productData;
    const { state, dispatch } = useContext(CartContext);
    const data = state.selectedItem[id - 1];

    return (
        <div className={style.productStore}>

            <div>
                <img src={image} alt="product" />
                <h1> {shorter(title)} </h1>
            </div>

            <div className={ style.priceProduct }>
                <span> Price: {price} </span>
                <span> Category: {category} </span>
            </div>

            <div>
                <p> {shorterLetters(description)} </p>
            </div>

            <div className={style.buttonProduct}>
                <Link to={`/details/${id}`}> Details </Link>

                <div className={style.buttonProductTransition} style={{ transition: "all .5s" }} >
                    {
                        isItThere(state, id) ?
                            <div>
                                <button id={style.INCREASE} onClick={() => dispatch({ type: 'INCREASE', payload: productData })} > + </button>

                                {findQuantity(state, id) > 0 && <span id={style.quantityProduct} > {findQuantity(state, id)} </span>}

                                {findQuantity(state, id) === 1 && <button id={style.REMOVE_ITEM} onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: productData })} > <img src={trashSVG} alt="trash" /> </button>}

                                {findQuantity(state, id) > 1 && <button id={style.DECREASE} onClick={() => dispatch({ type: 'DECREASE', payload: productData })} > - </button>}

                            </div> :

                            <button id={style.ADD_ITEM} onClick={() => dispatch({ type: 'ADD_ITEM', payload: productData })}> Add to cart </button>
                    }
                </div>

            </div>

        </div>
    );
};

export default ProductStore;