import React from 'react';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const casts of cart) {
        total = total + casts.salary;
    }

    return (
        /* ======sending data ========= */
        <div>
            <h3>Cast cart summary</h3>
            <h5>Casted Actor: {props.cart.length}</h5>
            <br />
            <p>Total: {total}</p>
            {
                cart.map(item => <CartItem
                    key={item.name}
                    cast={item}
                />)
            }
        </div>
    );
};

export default Cart;