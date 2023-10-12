import React from 'react'
import './Item.css'

const Item = (props) => {

  console.log(props)

  return (
    <div className='item'>
        <img src={props.image} alt={`picture of ${props.name}`} className='popular-item-image'/>
        <p>{props.name}</p>
        <div className='item-price'>
            <div className='price'>
                {`$${props.price}`}
            </div>
        </div>
    </div>
  )
}

export default Item
