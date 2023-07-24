import React from 'react'
import { useCustomContext } from '../../Context/ContextProvider'
import { ProductCard, ProductCartCard } from '../../components'
import "../CartPage/CartPage.css"

const CartPage = () => {
  const { cart, getTotal} = useCustomContext()
  console.log(getTotal())
    return (
    
   <div>
   {cart.length >0 
    ?
    <>
    <div className='carrocentral'>
  
    {cart.map(product =>(
     <ProductCartCard key={product.id} producto={product} />
    ))}
     </div>
     
     <div className='total'>
        Total: ${getTotal()}
     </div>
     </>
 :
   <div className='nocompra'>
  <h2>No has comprado nada</h2>
  </div>
  
  }
   
   </div>
)}

export default CartPage