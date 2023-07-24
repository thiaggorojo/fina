import React from 'react'
import "../Nav/Nav.css"
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { NavLink, Route, Routes } from 'react-router-dom'
import logo from "../footer/logo.png";
import {TiMail} from "react-icons/ti";

const Nav = () => {


return (

    <div className='ContenedorNav'>

        <div className='Contenedor-0'>

            <h2><img src={logo} alt="" /></h2>
        </div>

        <div className='Contenedor-1'>
            { <span><AiOutlineSearch/></span> }
            <input type="search" placeholder='¿Que juego estas buscando?'/>
        </div>

        <div className='Contenedor-2'>
            <NavLink className={ ({isActive}) => isActive ? 'active' : 'black' } to={'/'}> <AiFillHome/> </NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'active' : 'black' } to={'/cart'}> <BsFillCartFill/> </NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'active' : 'black' } to={'/contacto'}> <TiMail/> </NavLink>
        </div>

    </div>
)

}

export default Nav