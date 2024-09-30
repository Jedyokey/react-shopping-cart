import React from 'react'

const Product = ({data}) => {
    // const {id, productName, price, productImage} = data;
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

      <button className='addToCartBtn'>Add To Cart</button>
    </div>
  )
}

export default Produc