import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg'
import './App.css'
import Register from './components/Auth/register'
import Login from './components/Auth/login'
import Home from './components/home'
import PageNotFound from './components/PageNotFound';
import ProductsView from './components/product/ProductsView';
import ClientCart from './components/cart/ClientCart';
import ProductDetails from './components/product/ProductDetails';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />}/>
      {/* auth */}
      <Route path="/login"  element={<Login />}/>
      <Route path="/Register" element={<Register />}/>
      {/* endauth */}

      {/* products && Cart */}
      <Route path="/products" element={<ProductsView />}/>
      <Route path="/product/:productId" element={<ProductDetails />}/>
      <Route path="/cart/:clientId" element={<ClientCart />}/>
      {/* endProducts */}

      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  </BrowserRouter>,
    </div>
  )
}

export default App
