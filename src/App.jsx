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

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/login"  element={<Login />}/>
      <Route path="/Register" element={<Register />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  </BrowserRouter>,
    </div>
  )
}

export default App
