import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //javascript kodları
  let a = 15;
  const firstName = "Pinar Aliogullari"
  let sonuc = true;
  let isimler = [
    "Pınar",
    "Emre",
    "Serkan",
    "Ufuk"
  ]
  return (
    //html kodları
    <>
      <p>A sayisinin degeri: {a}</p>
      <p>Müşterinin Adı:{firstName}</p>
      {sonuc ? <p>Ehliyet alabilirsin</p> : <p>Ehliyet alamazsın</p>}
      {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: 'orange',
            border: '1px solid black'
          }} key={index}>{isim}</div>
        ))
      }
    </>


  )
}

export default App
