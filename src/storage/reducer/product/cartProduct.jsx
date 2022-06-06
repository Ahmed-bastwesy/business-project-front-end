import { FETCH_ALL,ADD_TO_CART,REMOVE_FROM_CART} from '../../action/product/types';

export default (cartProducts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case ADD_TO_CART:
        return [...cartProducts,cartProducts.find(action.payload)]
    case REMOVE_FROM_CART:
      return cartProducts.filter((cartProduct) => cartProduct.id !== action.payload);
    default:
      return cartProducts;
  }
};
