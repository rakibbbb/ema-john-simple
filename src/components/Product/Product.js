import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="Product Image" />
      </div>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <p>only {stock} left in stock - order soon</p>
        <button 
            className="add-cart-btn" 
            onClick={() => props.handleAddProduct(props.product)}
            >
                <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                </button>
      </div>
    </div>
  );
};

export default Product;
