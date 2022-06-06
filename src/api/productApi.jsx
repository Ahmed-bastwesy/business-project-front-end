import axios from 'axios';

const url = 'http://127.0.0.1:8000/products';
//#############  client dealing with cart ###########
export const fetchProducts = () => axios.get(url);
export const addProductToCard = (userId,productId) => axios.patch(`${url}/cart/${userId}/${productId}`);
export const deleteProductFromCard = (userId,productId) => axios.delete(`${url}/cart/${userId}/${productId}`);