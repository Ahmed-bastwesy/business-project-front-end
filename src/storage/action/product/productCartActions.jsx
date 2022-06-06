import { FETCH_ALL,ADD_TO_CART,REMOVE_FROM_CART} from './types';

import {fetchProducts,addProductToCard,deleteProductFromCard} from '../../../api/productApi';

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await fetchProducts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const addProduct = (id) => async (dispatch) => {
    try {
        // await addProductToCard(id);
        console.log(id);
        dispatch({ type: ADD_TO_CART, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};


export const deleteProduct = (id) => async (dispatch) => {
        try {
          await deleteProductFromCard(id);
      
          dispatch({ type: REMOVE_FROM_CART, payload: id });
        } catch (error) {
          console.log(error.message);
        }
      };