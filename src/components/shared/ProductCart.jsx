import React from 'react';
import style from "./ProductCart.module.scss";
import { Link } from 'react-router-dom';

//SVG
import trashSvg from "../../assets/trash.svg";

const ProductCart = ({ productData, dispatch }) => {

    const { image, title, quantity, price, id } = productData;

    return (
        <div className={style.productCart}>
            <div>
                <Link className={style.linkCart} to={`/details/${id}`} >
                    <img src={image} alt="product photo" />
                </Link>
            </div>

            <div className={style.titleCart} >
                <h4> {title} </h4>
            </div>

            <div className={style.priceCart}>
                <span> { price } $ * </span>
                <span> {quantity} </span>
            </div>

            <div className={style.buttonCart}>
                {quantity >= 1 && <button onClick={() => dispatch({ type: 'INCREASE', payload: productData })} > + </button>}
                {quantity === 1 && <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: productData })} > <img src={ trashSvg } alt="trash" /> </button>}
                {quantity > 1 && <button onClick={() => dispatch({ type: 'DECREASE', payload: productData })} > - </button>}

            </div>
        </div >
    );
};

export default ProductCart;