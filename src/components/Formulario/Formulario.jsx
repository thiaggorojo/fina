import React, { useState } from 'react'
import './Formulario.css'
import Nav from '../Nav/Nav'


const Formulario = () => {

const [userData,setUserData]=useState({})
const[formUserData,setFormUserData]=useState({
fullname:"",
email:"",
asunto:"",
mensaje:""



})


const handleRegisterUser=(evento)=>{
    evento.preventDefault()
    console.log(evento)
    setUserData(formUserData)
    setFormUserData({fullname:"",
    email:"",
    asunto:"",
    mensaje:""})
}

const handleChangeRegisterUser=(evento)=>{
    console.log(evento.target.name)
    setFormUserData({...formUserData,[evento.target.name]: evento.target.value})
    console.log(formUserData)

}

return (
    <div>
        
    <div className='contenedor-prin'>

        <div>
            <h4>CONTACTO</h4>

<form className='contenedor-form' onSubmit={handleRegisterUser}>

            <label htmlFor="fullname">Nombre completo</label>
            <input className='input-text'type='text' name='fullname' id='fullname' onChange={handleChangeRegisterUser} value={formUserData.fullname} />


            <label htmlFor="email">Email</label>
            <input className='input-text' type="email" name='email'id='email' onChange={handleChangeRegisterUser} value={formUserData.email}/>

            <label htmlFor="asunto">Asunto</label>
            <input className='input-text' type="text" name='asunto' id='asunto' onChange={handleChangeRegisterUser} value={formUserData.asunto} />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea className='text-textarea' name='mensaje' id='mensaje' onChange={handleChangeRegisterUser} value={formUserData.mensaje}></textarea>

            <div className='contenedor-boton'>
                <button className='boton' type='submit'>Enviar</button>
            </div>
</form>
        </div>

    </div>
    </div>

)
}






export default Formulario