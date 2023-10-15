import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';

const Product = () => {

  const {allProduct} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProduct.find( (e)=> e.id === Number(productId) )

  return (
    <div>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
