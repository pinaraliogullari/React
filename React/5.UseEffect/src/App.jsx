import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("Her zaman çalışır.")
  })
  useEffect(() => {
    console.log("Component ilk render edildiğinde çalışır.")
  }, [])
  useEffect(() => {
    console.log("component ilk render edildiğinde ve firstname state değeri değiştiğinde çalşır.")
  }, [firstName])
  useEffect(() => {
    console.log("component ilk render edildiğinde ve lastname state değeri değiştiğinde çalşır.")
  }, [lastName])
  //birden fazla parametre de verilebilir.
  useEffect(() => {
    console.log("component ilk render edildiğinde ve firstname veya lastname state değerlerinde değişiklik olduğunda çalşır.")
  }, [firstName, lastName])
  return (
    <>
      <div><button onClick={() => setFirstName("Pınar")}>Adı Değiştir</button></div>
      <div><button onClick={() => setLastName("Alioğulları")}>Soyadı Değiştir</button></div>

    </>
  )
}

export default App
