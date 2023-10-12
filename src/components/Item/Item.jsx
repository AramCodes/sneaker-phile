import React from 'react'
import './Item.css'

const Item = (props) => {

  return (
    <div className='item'>
        <img src={props.image} alt={`picture of ${props.name}`} className='popular-item-image'/>
        <p className='prod-name'>{props.name}</p>
        <div className='item-price'>
            <div className='price'>
                {`$${props.price}`}
            </div>
        </div>
        {props.description && <p className='desc'>{props.description}</p>}
    </div>
  )
}

export default Item
