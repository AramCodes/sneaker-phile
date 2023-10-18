import React from 'react'
import './Breadcrumbs.css'
import arrowIcon from '../../assets/images/breadcrumb_arrow.png'

const Breadcrumbs = (props) => {

    const {product} = props;

    return (
        <div className='breadcrumbs'>
            Home <img src={arrowIcon} alt="breadcrumb arrow" /> 
            Shop <img src={arrowIcon} alt="breadcrumb arrow" /> 
            {product.category} <img src={arrowIcon} alt="breadcrumb arrow" />
            {product.name} 
        </div>
    )
}

export default Breadcrumbs 
