import React from 'react'
import {useParams} from 'react-router-dom'
import CartProductCard from './CartProductCard'

function ClientCart() {
    const {clientId}=useParams()
    //function to get all product related to user cart
    // delete product from cart
    // add product to cart
    // const [cartProducts, setCartProducts] = useState([]);

    //############  functions  #############//
    // const cartProduct = cartProducts.map((product) => {
    //     return (
    //     <div className="card  col-lg-3 col-md-4 col-sm-6 m-1 d-flex text-center p-0 " key={product.id}>
    //         <CartProductCard  product={product} />
    //         </div>
    //     )
    // })

    const product ={
      name:"khalid",
      price:500,
      id:1,
      url:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }

  return (


    <>
    <CartProductCard product={product}/>
    </>
  )
}

export default ClientCart