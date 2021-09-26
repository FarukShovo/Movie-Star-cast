import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import './cast.css'

const Cast = (props) => {
    /* ================disstructring of props of cast============= */
    const { name, age, img, salary, role, nationality } = props.cast;
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
    return (
        /* ========use data from props=========== */
        <div className="cast-details">
            <div>

                <img src={img} alt="" />
                <h4>Name: {name} </h4>
                <p>Age: {age}</p>
                <p>Role: {role} </p>
                <p>Nationality: {nationality}</p>
                <p>Salary:{salary}</p>
                <button onClick={() => props.handleAddToCart(props.cast)} className="cart-btn">{cartIcon}add to cart</button>
            </div>
        </div>
    );
};

export default Cast;