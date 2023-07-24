import React from 'react'
import { Link } from 'react-router-dom'
import "../ProductCard/ProductCard.css"


const ProductCard = ({producto}) => {
  return (
    <div className='productocard'>
    <span>{producto.nombre}</span>
    <h3> {producto.Tituo}</h3>
    <img src={producto.img} alt="" /><br /><br />
    <span className='precio'>  $  {producto.precio}</span>
      <br />
      <Link className='detalles' to={'/detail/' + producto.id}>Detalles</Link>
     
     
   </div>
  )
}

export default ProductCard