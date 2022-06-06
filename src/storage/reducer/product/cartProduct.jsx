import { FETCH_ALL,ADD_TO_CART,REMOVE_FROM_CART} from '../../action/product/types';

const cartProduct=(cartProducts = [], action) => {
   console.log('kkkkkkkkkkkkkkkkkkkkkkkkk');
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case ADD_TO_CART:
        console.log(action);
        return  ; // [...cartProducts,cartProducts.find(action.payload)]
    case REMOVE_FROM_CART:
      return cartProducts.filter((cartProduct) => cartProduct.id !== action.payload);
    default:
      return cartProducts;
  }
};

export default cartProduct