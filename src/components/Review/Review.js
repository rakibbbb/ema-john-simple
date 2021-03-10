import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import congratulation from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    let thankYou;
    if(orderPlaced) {
        thankYou = <img src={congratulation}></img>;
    }

    const removeProduct = (productkey) =>{
        console.log("Remove product", productkey);
        const newCart = cart.filter(pd => pd.key !== productkey);
        setCart(newCart);
        removeFromDatabaseCart(productkey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts);
    }, [])
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem 
                        product={pd} 
                        removeProduct = {removeProduct}
                        key={pd.key}
                        ></ReviewItem>)
                }
                {
                    thankYou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="add-cart-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;