import React from 'react'
import { Link } from "react-router-dom";

function ProductCard({product}) {


const addProductToCart= ()=>{
    //send data to user cart
}

const removeProductFromCart= ()=>{
    //send data to user cart
}
  return (


    <>
    <div className=" card  mx-2 m-0 d-flex text-center p-0 productcard w-50">
    
        <Link to={`/cart/${product.id}`} className="movie-button">
        <img src={product.url} className="card-img myimg m-0 p-0"/>
       
        </Link>
            <div>
                <div className="card m-0 p-0" >
                    <div className="card-body bg-dark">
                        <h5 className="card-title bg-white">{product.name}</h5>
                        
                        <h5 className="card-footer bg-white">price : {product.price} $</h5>
                        <div className=" card-footer bg-white text-center">
                            <h5 className=" bg-white"> Amount </h5>
    
                                <input type="number" className="card-footer btn-outline-dark w-50"  id="amount" name='amount' value={product.amount} />
                        </div>
                        <button className=" btn btn-danger col-6 mt-2" onClick={addProductToCart} >add to cart</button>
                        <button className=" btn btn-danger col-6 mt-2 mx-1" onClick={removeProductFromCart} >remove from card</button>
                        
                        
                    </div>
                </div>
            </div>
        
    </div>
    </>
  )
}

export default ProductCard