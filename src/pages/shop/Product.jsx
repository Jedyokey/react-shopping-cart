import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

const Product = ({data}) => {
    const {id, productName, price, productImage} = data;
    const {addToCart, cartItems} = useContext(ShopContext); 

    const cartItemAmount = cartItems[id];
  return ( 
    <div className='product'>
      {/* {productName} */}
      <img src={productImage} alt={productName} />

      <div className='description'>
        <p>
            <strong>{productName}</strong>
        </p>
        <p>${price}</p>
      </div> 

      <button className='addToCartBtn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  )
}

export default Product
