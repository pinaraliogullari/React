import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/counterSlice';

function App() {
  //dispatch ile storedaki sliceler içinde yer alan fonksiyonlara ulaşılır.
  const dispatch = useDispatch();
  //useselector ile storedan çekilen slice ın içindeki fonksiyon dönmez yalnızca initial state i döner.
  const { value } = useSelector((store) => store.counter);
  console.log(value)

  return (
    <>
      <div>{value}</div>
      <div><button onClick={() => dispatch(increment())}>Arttır</button><button onClick={() => dispatch(decrement())}>Azalt</button></div>
    </>
  )
}

export default App
