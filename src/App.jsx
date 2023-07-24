import { React } from 'react'
import { useCustomContext } from './Context/ContextProvider'
import { ProductCard, Nav } from './components'
import { DetailPage, HomePage, CartPage} from './screens'
import { Route, Routes, NavLink } from 'react-router-dom'
import Formulario from './components/Formulario/Formulario'







function App() {
 

  return (
    <>
     <div>
     <nav>
      <Nav/>
      <NavLink to="/cart" ></NavLink> <br />
      <NavLink to="/"></NavLink>
     </nav>
 <Routes>
   <Route path='/'element={<HomePage/>} />
  <Route path='/detail/:id' element={<DetailPage/>} />
  <Route path='/cart' element={<CartPage/>} />
  <Route path='/Contacto' element={<Formulario/>} />
   
   </Routes>
   
     </div>
    
    
    </>
  )
}

export default App
