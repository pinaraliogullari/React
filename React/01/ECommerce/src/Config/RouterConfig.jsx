import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductDetails from '../Components/ProductDetails'

const RouterConfig = () => {
  return (
 <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product-details/:id' element={<ProductDetails />} />
 </Routes>
  )
}

export default RouterConfig