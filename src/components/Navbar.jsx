import React ,{ useContext } from 'react';
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";

//SVG
import cartSVG from "../assets/cart.svg";

//Context
import { CartContext } from "../context/CartContextProvider";

const Navbar = () => {

    const { state } = useContext( CartContext );
    
    return (
        <div className={ style.navbar }>
            <div className={ style.linkStore }>
                <Link to="/store" > Store </Link>
            </div>

            <div className={ style.cartSVG } >
                <Link to="/cart" ><img src={ cartSVG } alt="cart" /></Link>
                <span> { state.itemCounter } </span>
            </div>
        </div>
    );
};

export default Navbar;