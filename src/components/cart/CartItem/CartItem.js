import React from 'react';

const CartItem = (props) => {
    const { name } = props.cast;
    return (
        <div>
            <h6>{name}</h6>
        </div>
    );
};

export default CartItem;