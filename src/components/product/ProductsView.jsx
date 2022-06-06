import React from 'react'
import ProductCard from './ProductCard'

function ProductsView() {

  const product ={
    name:"khalid",
    price:500,
    id:1,
    url:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
  return (



<>
<ProductCard product={product}/>
</>

  )
}

export default ProductsView