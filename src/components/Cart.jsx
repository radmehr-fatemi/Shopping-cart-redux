import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from "./Cart.module.scss";

//Context
import { CartContext } from '../context/CartContextProvider';

//Component
import ProductCart from './shared/ProductCart';

const Cart = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={style.cart}>

            <div className={style.checkoutCart}>
                {
                    !state.selectedItem.length && <div className={style.checkoutCartTrue}>
                        <h1> Youre Shopping cart is empty </h1>
                        <Link to='/store' > Go to shopping </Link>
                    </div>

                }

                {
                    !state.checkout && (!!state.selectedItem.length) && <div className={style.checkoutCartFalse} >
                        <h1> Proceed to checkout </h1>
                        <span> Total: { state.total.toFixed(2) } $ </span>
                        <button onClick={() => dispatch({ type: 'CHECKOUT' })} > Checkout </button>
                    </div>
                }
                <div className={style.checkoutCartByMore}>
                    <Link to='/store' > Buy more </Link>
                    <button onClick={() => dispatch({ type: 'CLEAR' })} > Clear </button>
                </div>
            </div>
            <div>
                {
                    state.selectedItem.map(item => <ProductCart key={item.id} productData={item} dispatch={dispatch} />)
                }
            </div>
        </div>
    );
};

export default Cart;