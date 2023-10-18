import React from 'react'
import './Cart.css'
import  { useCart} from 'react-use-cart'
import CartItems from '../../components/CartItem/CartItems';

const Cart = () => {

  const { 
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart,
  } = useCart();

  if (isEmpty) {
    return <h1 className='centered'>Your Cart is Empty</h1> 
  }
  
  console.log(totalItems, items,totalUniqueItems)

  const cartItems = items.map((item, ind)=> {
    return <CartItems
            key={ind}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            description={item.description} 
            removeItem={removeItem}
            updateItemQuantity={updateItemQuantity}
          />
  })

  return (
    <section className='cart'>
      <main className='cart-items'>
        <div className="cart-items-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
          {cartItems}
        <div className='cart-items-down'>
          <div className="cart-items-total">
            <h1>Cart Total</h1>
            <div>
              <div className='cart-items-total-item'>
                <p>Subtotal</p>
                <p>${cartTotal}</p>
              </div>
              <hr />
              <div className='cart-items-total-item'>
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <hr />
              <div className='cart-items-total-item'>
                  <h3>Total</h3>
                  <h3>${cartTotal}</h3>
              </div>
            </div>
            <div className='flex'>
              <button>Proceed to Checkout</button>
              <i className="fa-solid fa-trash" onClick={emptyCart}></i>
            </div>
          </div>
        </div>
      </main>
      </section>
    )
  

  
}

export default Cart
