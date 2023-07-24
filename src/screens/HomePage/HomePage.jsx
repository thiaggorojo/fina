import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../Context/ContextProvider'
import { ProductCard, Footer, Header} from '../../components'
import { Form } from 'react-router-dom'
import "../HomePage/HomePage.css"
import { AiOutlineSearch } from "react-icons/ai";


const HomePage = () => {
  
  const {products} = useCustomContext()
  const [buscarProducto, setbuscarProducto] = useState ("")
  const [max, setMax] = useState (4000)
  const [min, setMin] = useState (0)
  const [currenProducts, setcurrenproducts] = useState (products)

  useEffect(()=> {
   setcurrenproducts(products.filter(
    producto => producto.Tituo.toLowerCase().includes(buscarProducto.toLowerCase()) && producto.precio >= min && producto.precio <= max
    ))
  }, [buscarProducto, max, min])
  return (
    <>

<Header/>

    <div className='Contenedor-filtro'>
     
      <div className='nombrejuego'>
      { <span><AiOutlineSearch/></span> } 
        <input  placeholder=' Nombre del juego' value={buscarProducto} onChange={(e) => setbuscarProducto(e.target.value)}/>
        </div>
    <div className='preccio'>
        <h2>Precio</h2>
        
        <div className='inputt'> 
        <input type="text"  value={min} onChange={(e) => setMin(Number(e.target.value))}/> 
        <input type="text" value={max} onChange={(e) => setMax(Number(e.target.value))}/>
        </div>
        </div>
    
    </div>
    <div className='productocontainer'>
    {currenProducts.length > 0 
    ?
    currenProducts.map(producto => (
    <ProductCard producto={producto} key={producto.id} />
    ))
   :
    <h2>No hay juegos con ese Nombre</h2>
    }
  </div>
<div className='footerr'>
  <Footer/>
  </div>
  </>
  )
}

export default HomePage