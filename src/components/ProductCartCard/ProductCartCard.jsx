import React from 'react'
import "../ProductCartCard/ProductCartCard.css"

const ProductCartCard = ({producto}) => {
  return (
    <>
    <div className='productocardcart'>
    <span>{producto.nombre}</span>
    <h3> {producto.Tituo}</h3>
    <img src={producto.img} alt="" />
    <span className='precio'>  $  {producto.precio}</span>
      
    <p>Cantidad: {producto.quantity}</p>
     
     
   </div>
   </>
  )
}

export default ProductCartCard