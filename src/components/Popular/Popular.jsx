import React from 'react'
import './Popular.css'
import data_product from '../../assets/data'
import Item from '../Item/Item'

const Popular = () => {

    const products = data_product.map((item, ind) => {
        return <Item 
                key={ind}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                />
    })

  return (
    <div className='popular'>
        <h1>Popular Right Now</h1>
        <hr/>

        <div className="popular-item">
            {products}
        </div>
    </div>
  )
}

export default Popular
