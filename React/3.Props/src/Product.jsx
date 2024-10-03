import React from 'react'

const Product = ({ productName, price }) => {
  return (
    <>
      <div>Ürün Bilgileri</div>
      <div>
        <div>İsim: {productName}</div>
        <div>Fiyat: {price} TL</div>

      </div>
    </>

  )
}
export default Product


//veya;
// import React from 'react'

// const Product = (props) => {
// const {productName,price}=props;
//   return (
//     <>
//       <div>Ürün Bilgileri</div>
//       <div>
//         <div>İsim: {productName}</div>
//         <div>İsim: {price} TL</div>

//       </div>
//     </>

//   )
// }

// export default Product