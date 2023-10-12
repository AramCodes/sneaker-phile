import React from 'react'
import './NewCollections.css'
import newCollections from '../../assets/new_collections'
import Item from "../Item/Item"
 
const NewCollections = () => {

    const collection = newCollections.map((item, ind)=> {
       return <Item 
              key={ind}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
              />
    })

  return (
    <div className='new-collections'>
        <h1>New Collection</h1>
        <hr />
        
        <div className="collections">
            {collection}
        </div>
    </div>
  )
}

export default NewCollections
