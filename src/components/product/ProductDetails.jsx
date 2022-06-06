import React ,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
function ProductDetails() {
    const {productId}=useParams();
    // use user effect to fetch data based on the id

//  product.name="khalid"
//  product.price=500
//  product.id="1"
//  product.url='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  return (


    <>
    <div class=" card product-card-1 mx-2 m-0 d-flex text-center p-0 ">
    
        <Link to={`/cart/${id}`} className="movie-button">
        <img src={product.url} class="card-img myimg m-0 p-0"/>
       
        </Link>
            <div>
                <div class="card m-0 p-0" >
                    <div class="card-body bg-dark">
                        <h5 class="card-title bg-white">{product.name}</h5>
                        
                        <h5 class="card-footer bg-white">price : {product.price} $</h5>
                        <div class=" card-footer bg-white text-center">
                            <h5 class=" bg-white"> Amount </h5>
    
                                <input type="number" class="card-footer btn-outline-dark w-50"  id="amount" name='amount' value={product.amount} />
                        </div>
                        <button class=" btn btn-danger col-6 mt-2" >add to cart</button>
                        
                        
                    </div>
                </div>
            </div>
        
    </div>
    </>
  )
}

export default ProductDetails