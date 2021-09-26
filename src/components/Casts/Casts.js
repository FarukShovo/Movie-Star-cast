import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Cast from '../Cast/Cast';
import './Casts.css';

const Casts = () => {
    const [casts, setCasts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./casts.json')
            .then(res => res.json())
            .then(data => setCasts(data))
    }, [])
    const handleAddToCart = (cast) => {
        const newCart = [...cart, cast];
        setCart(newCart);
    }
    return (
        <div className="casts-container">
            <div className="cast-container">
                {
                    casts.map(cast => <Cast
                        key={cast.name}
                        cast={cast}
                        handleAddToCart={handleAddToCart}

                    ></Cast>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Casts;