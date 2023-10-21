import React from 'react'
import './RelatedProducts.css'
import dataProduct from '../../assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {

    const related = dataProduct.map( (item, i)=> {
        return <Item 
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                item={item}
                />
    })

  return (
    <div className='related-products'>
        <h1>Related to products you've viewed</h1>
        <hr />
        <div className="related-products-item">
            {related}
        </div>
    </div>
  )
}

export default RelatedProducts
