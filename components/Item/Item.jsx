import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {

  function scrollToTop() {
    window.scrollTo(0,0)
  }

  return (
    <Link to={`/product/${props.id}`} onClick={scrollToTop}>
      <div className='item'>
          
          <img src={props.image} alt={`picture of ${props.name}`} className='item-image'/>
          
          <p className='prod-name'>{props.name}</p>
          <div className='item-price'>
              <div className='price'>
                  {`$${props.price}`}
              </div>
          </div>
          {props.description && <p className='desc'>{props.description}</p>}
      </div>
    </Link>
  )
}

export default Item
