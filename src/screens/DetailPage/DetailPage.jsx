import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../Context/ContextProvider'
import "../DetailPage/DetailPage.css"
import { Counter } from '../../components'


const DetailPage = () => {
  
   const {id}= useParams()
   const {getProductById, addproductCart, isInCart, getProductCartById} = useCustomContext()
   const [productIsInCart, setProductIsInCart] = useState(isInCart(id))
   const [productdetail,setproductdetail] = useState (isInCart(id) ? (getProductCartById(id)): (getProductById(id)))
 
   return (
   
  <>
  
 <div className=' detallescontainer'>
    
   <div className='imagendetail'> 
        <img src={productdetail.img} alt="" /> 
   </div>
    
   <div className='deatid'>
        
         <h1>{productdetail.Tituo}</h1>
         <h3 className='descripcion'>{productdetail.descripcion}</h3>
         
         <span className='precioo'>${productdetail.precio}</span>
         
         {isInCart(id) ? 
          
          <Counter initialValue={productdetail.quantity} stock={productdetail.stock} id={productdetail.id}/>
         :
          <Counter initialValue={1} stock={productdetail.stock} id={productdetail.id}/>          
         }

   </div> 
   
   
 </div>
    </>
  )
}

export default DetailPage