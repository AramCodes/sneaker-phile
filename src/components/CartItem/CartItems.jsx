import React, { useContext } from 'react'
import './CartItems.css'
import removeIcon from '../../assets/images/cart_cross_icon.png'

const CartItem = (props) => {

  return (
      <div>
        <div className="cart-items-format cart-items-format-main">
          <img src={props.image} alt="product-icon" className={`cart-item ${props.name}`}/>
          <p>{props.name}</p>
          <p>${props.price}</p>

          <div>
            <button className='btn' onClick={()=> props.updateItemQuantity(props.id, props.quantity - 1)}>-</button>
            <button className='cart-items-quantity'>{props.quantity}</button>
            <button className='btn' onClick={()=> props.updateItemQuantity(props.id, props.quantity + 1)}>+</button>
          </div>

          <p>${props.price * props.quantity}</p>
          <img src={removeIcon} alt="remove-item-icon" onClick={()=>{props.removeItem(props.id)}} className='cart-items-remove-icon'/>
        </div>
        <hr />
      </div>
  )

}

export default CartItem

// {`cart-product-icon${}`}