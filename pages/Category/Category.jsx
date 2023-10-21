import React, { useContext, useState } from 'react'
import './Category.css'
import { ShopContext } from '../../Context/ShopContext'
import dropdownIcon from '../../assets/images/dropdown_icon.png'
import Item from '../../components/Item/Item'


const Category = (props) => {
  const {allProduct} = useContext(ShopContext)

  //Limits 10 per page
  const [items, setItems] = useState([...allProduct])
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const loadMore = () => {
    setItemsPerPage( itemsPerPage + 20)
  }

  const products = items.slice(0, itemsPerPage).map( (item, i) => {
    if (props.category === item.category) {
        return <Item 
        key={i}
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        description={item.description}
        item={item}
        />  
    }
    else {
      return null
    }
  })

  return (
    <div className='shop-category'>
      <div className='shop-banner-area'>
        <img className='shopcategory-banner' src={props.banner} alt={`${props.category} ${props.banner}`} />
      </div>

        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-{itemsPerPage / 2}</span> out of 20 products
          </p>
          <div className="shopcategory-sort">
              <p>Sort by</p>  <img src={dropdownIcon} alt="dropdown" className='category-drop-down'/>
          </div>
        </div>
        <div className="shopcategory-products">
            {products}
        </div>

         <div className="shopcategory-load" onClick={loadMore}>See More Options</div>
    </div>
  )
}

export default Category
