import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link className='link' to="/">Ana Sayfa</Link>
            <Link className='link' to="/about">Hakkımızda</Link>
            <Link className='link' to="/products">Ürünler</Link>
            <Link className='link' to="/contact">İletişim</Link>
        </div>

    )
}

export default Header