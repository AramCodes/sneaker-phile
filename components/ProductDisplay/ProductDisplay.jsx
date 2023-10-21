import React  from 'react'
import './ProductDisplay.css'
import starIcon from '../../assets/images/star_icon.png'
import dullStar from '../../assets/images/star_dull_icon.png'
import { useCart } from 'react-use-cart'


const ProductDisplay = (props) => {

    const {product} = props;

    const {addItem} = useCart();
    // const {addToCart} = useContext(ShopContext)

  return (
    <div className='product-display'>

        <div className="product-display-left">
            <div className="product-display-img-list">
                <img src= {product.image} alt= {`picture of ${product.name}`} />
                <img src= {product.image} alt= {`picture of ${product.name}`}/>
                <img src= {product.image} alt= {`picture of ${product.name}`} />
                <img src= {product.image} alt= {`picture of ${product.name}`} />
            </div>
            <div className="product-display-img">
                <img className='product-display-main-img' src={product.image} alt={`picture of ${product.name}`} />
            </div>
        </div>

        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="product-display-right-stars">  
                <img src={starIcon} alt="star1" />
                <img src={starIcon} alt="star2" />
                <img src={starIcon} alt="star3" />
                <img src={starIcon} alt="star4" />
                <img src={dullStar} alt="star5" />
                <p>(325)</p>
            </div>
            <div className="product-display-right-price">
                <p className='price'>${product.price}</p>
            </div>

            <div className='product-display-right-description'>
                <p>
                   {product.description} 
                </p>
            </div>

            <div className="product-display-right-size">
                <h2>Select Size</h2>
                <div className='product-display-right-sizes'>
                    {product.category === "Shoes" && <div className='size disabled'>6</div>}
                    {product.category === "Shoes" && <div className='size disabled'>7</div>}
                    {product.category === "Shoes" && <div className='size'>8</div>}
                    {product.category === "Shoes" && <div className='size'>9</div>}
                    {product.category === "Shoes" && <div className='size'>10</div>}
                    {product.category === "Shoes" && <div className='size'>11</div>}
                    {product.category === "Shoes" && <div className='size'>12</div>}
                    {product.category === "Shoes" && <div className='size'>13</div>}

                    {product.category === "Jackets" && <div className='size disabled'>XXS</div>}
                    {product.category === "Jackets" && <div className='size'>XS</div>}
                    {product.category === "Jackets" && <div className='size'>S</div>}
                    {product.category === "Jackets" && <div className='size'>M</div>}
                    {product.category === "Jackets" && <div className='size'>L</div>}
                    {product.category === "Jackets" && <div className='size'>XL</div>}
                    {product.category === "Jackets" && <div className='size'>XXL</div>}
                    {product.category === "Jackets" && <div className='size disabled'>XXXL</div>}
                </div>
            </div>


            <button onClick={() => {addItem(props.item)}}>Add to Cart</button>
            <p className='product-display-right-category'><span>Category :</span> {`Men's ${product.category}`}</p>
        </div>
    </div>
  )
}

export default ProductDisplay
