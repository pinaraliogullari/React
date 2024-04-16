import { useState } from 'react'
import './App.css'
import Product from './Product'

function App() {
  const productName = "Buzdolabı"

  return (
    <>
      <Product productName="Ayakkabı" price={3200} />
      <hr />
      <Product productName={productName} price={36000} />

    </>
  )
}

export default App
