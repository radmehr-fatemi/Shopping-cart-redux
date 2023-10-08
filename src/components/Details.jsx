import React ,{ useContext } from 'react';
import { useParams } from "react-router-dom";
import style from "./Details.module.scss";
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch } from "react-redux";



const Details = () => {

    const products = useSelector( state => state.stateProducts.products );
    const id = useParams().id;
    const { title ,image ,price ,category ,description } = products[ id - 1 ];
    
    return (
        <div className={style.details}>

            <div>
                <img src={ image } alt="product photo" />
                <h1> { title  } </h1>
            </div>

            <div>
                <span> Price: { price } </span>
                <span> Category: { category } </span>
            </div>

            <div>
                <p> {description} </p>
            </div>
            <div>
                <Link to='/' > Back </Link>
            </div>
        </div>
    );
};

export default Details;