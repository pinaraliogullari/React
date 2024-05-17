import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setProductDetail } from '../Redux/slices/productSlice';
import { addToBasket, calculateTotal } from '../Redux/slices/basketSlice';
import '../Css/productDetail.css';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, productDetail } = useSelector((store) => store.product)
  const { price, image, title, description } = productDetail;
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count + 1);
  }

  const addBasket = () => {
    const payload = {
      id: id,
      price: price,
      image: image,
      description: description,
      title: title,
      count: count
    }
    dispatch(addToBasket(payload));
    dispatch(calculateTotal())
  }
  useEffect(() => {
    getProductById();
  }, [])

  const getProductById = () => {
    products && products.map((product) => {
      if (product.id == id) {
        dispatch(setProductDetail(product));
      }
    })
  }
  return (
    <div className='main' >
      <div style={{ marginRight: '40px' }}>
        <img src={image} className='detail-image' />
      </div>
      <div>
        <h1 className='title'>{title} </h1>
        <p className='desc'>{description} </p>
        <h1 className='price'>{price}₺ </h1>
        <div style={{ display: 'flex', alignItems: 'center' }} >
          <CiCircleMinus onClick={decrement} style={{ marginRight: '15px' }} className='counter-icon' />
          <span className='counter-value'>{count}</span>
          <CiCirclePlus onClick={increment} style={{ marginLeft: '15px' }} className='counter-icon' />
        </div>
        <div>
          <button onClick={addBasket} className='basket'>Sepete Ekle</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail