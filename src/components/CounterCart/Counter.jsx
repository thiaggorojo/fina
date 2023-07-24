import React from 'react'
import { useCustomContext } from '../../Context/ContextProvider'
import { useState } from 'react'


const Counter = ({initialValue, stock, id}) => {
    const {addProductCart} = useCustomContext ()
    const [quantity, setquantity]= useState(initialValue)
    const onClickAddProduct = () => {
      addProductCart(id, quantity)
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      
    }
  return (
    <>     
    <div> <br />
    <div className='btns'>
         <button onClick={() => setquantity(quantity >1 ? quantity -1 : quantity)}>-</button>
         <span>{quantity}</span>
         <button onClick={() => setquantity(quantity === stock ? quantity : quantity + 1)}>+</button>
      </div>
      <button onClick={onClickAddProduct} className='confirm'>Añadir a carrito</button>
    </div>
    
    </>
   
    
  )
}

export default Counter