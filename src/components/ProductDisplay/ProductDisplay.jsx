import React from 'react'
import './ProductDisplay.css'
import starIcon from '../../assets/images/star_icon.png'
import dullStar from '../../assets/images/star_dull_icon.png'

const ProductDisplay = (props) => {

    const {product} = props;

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
                    <div className='size disabled'>7</div>
                    <div className='size'>8</div>
                    <div className='size'>9</div>
                    <div className='size'>10</div>
                    <div className='size'>11</div>
                    <div className='size'>12</div>
                    <div className='size'>13</div>
                </div>
            </div>

            <button>Add to Cart</button>
            <p className='product-display-right-category'><span>Category :</span> {`Men's ${product.category}`}</p>
        </div>
    </div>
  )
}

export default ProductDisplay
