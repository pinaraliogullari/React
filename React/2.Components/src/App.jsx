import { useState } from 'react'
import './App.css'
import Login from './Login' //export default ile gönderilen component bu şekilde çağırılır.
import { users } from './Login' //export ile gönderilen component nu şekilde çağırılır.

function App() {


  return (
    <>
      <Login />
    </>
  )
}

export default App
