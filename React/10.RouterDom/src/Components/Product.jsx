import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, price } = product;
    const navigate=useNavigate();
    return (
        <div style={{ marginBottom: '40px', backgroundColor: 'lightgrey' }}>
            <div>Ürün Detayı</div>
            <h3>İsim: {name}</h3>
            <h3>Fiyat: {price}</h3>
            <button onClick={()=>navigate("/product-details/"+id)}>detayına git</button>
            {/* butona tıklanma eventlerinde navigate kullan */}
            {/* navigate yerine link kullandaydık 
            <Link to={`/product-details/${id}`}>
                <button>detayına git</button>
            </Link> */}
            
        </div>
    )
}

export default Product