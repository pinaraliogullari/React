import React, { useState } from 'react'
import '../Css/header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();
  const changeTheme = () => {
    const root = document.getElementById("root");

    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
    setTheme(!theme);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
      <div className='flex-row' onClick={() => navigate('/')}>
        <img className='logo' src='../src/Images/logo.png' />
        <p className='logo-text'>ALIOGULLARI</p>
      </div>
      <div className='flex-row'>
        <input className='search-input' type='text' placeholder='Bir şeyler arayın..' />
        <div className='icon'>
          {
            theme ? <FaMoon onClick={changeTheme} /> : <CiLight onClick={changeTheme} />
          }
          <CiShoppingBasket style={{ marginRight: '10px' }} />



        </div>
      </div>

    </div>

  )
}

export default Header