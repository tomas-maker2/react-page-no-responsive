import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './app.css'
import { ApiProvider } from './components/ApiContext/ApiContext'
import ProductDetails from './pages/ProductsDetails/ProductDetails'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <ApiProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ApiProvider>
  )
}

export default App

