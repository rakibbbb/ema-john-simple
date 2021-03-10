import React from 'react';

const Cart = (props) => {
    // console.log(props.cart);
    const cart = props.cart;
    const total = cart.reduce( (total, prd) => total + prd.price * prd.quantity,0);

    let shipping = 0;
    if(total > 0 && total < 25){
        shipping = 12.99;
    }
    else if(total >=25 && total < 50){
        shipping = 8.99;
    }
    else if(total >= 50){
        shipping = 4.99;
    }

    const tax = total * 0.1;

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const totalBeforeTax = total + shipping;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items ordered: {cart.length}</p>
            <p>Items price: ${formatNumber(total)}</p>
            <p>Shipping & Handling:	${formatNumber(shipping)}</p>
            <p>Total before tax: ${formatNumber(totalBeforeTax)}</p>
            <p>Estimated Tax: ${formatNumber(tax)}</p>
            <h4>Order Total: ${formatNumber(grandTotal)}</h4>
            {
                props.children
            }
        </div>
    );
};

export default Cart;