import React from 'react';
import logoTwo from './shopping-cart-solid.svg'

function Checkout(props) {
    const date = props.database.filter((item) => item.bought).length

    return (
        <div className="checkout">
            <img src={logoTwo} alt="logoTwo"/>
            <span className="counter"> {date} </span>
        </div>
    );
}

export default Checkout;