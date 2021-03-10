import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity, key, price} = props.product;
    const reviewItem = {
        borderBottom: "1px solid lightgray",
        marginBottom: "10px",
        paddingBottom: "10px",
        marginLeft: "100px"
    }
    return (
        <div style={reviewItem}>
            <h3 className="product-name">{name}</h3>
            <h5>Quantity: {quantity}</h5>
            <h5>Price: ${price}</h5>
            <button 
                className="add-cart-btn"
                onClick={() => props.removeProduct(key)}
                >Remove item</button>
        </div>
    );
};

export default ReviewItem;