import React from 'react'
import { Link } from "react-router-dom";
import ProductCard from '../product/ProductCard';

function CartProductCard({product}) {


const addProductToCart = ()=>{
    //send data to user cart
}
  return (


    <>
    <ProductCard  product={product}/>
    </>
  )
}

export default CartProductCard