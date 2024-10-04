import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import CartItems from './CartItems'  
import "./cart.css"
import { useNavigate } from 'react-router-dom'  

const cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext); 
    const totalAmount = getTotalCartAmount();  // Get total cart amount from ShopContext

    const navigate = useNavigate();

  return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
    
        <div className='cart-list'>
            <div className='cartItem'>
                {PRODUCTS.map(product => {   
                    if (cartItems[product.id] !== 0) {
                        return <CartItems data={product} />
                    }
                })}
            </div> 
        </div>

        {totalAmount > 0 ? (
            <div className="checkout">
            <p>Subtotal: ${totalAmount}</p> 
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button> 
        </div>
        ) : (
            <h2>Your Cart is Empty</h2>
        )} 
    </div>
  )  
}

export default cart
