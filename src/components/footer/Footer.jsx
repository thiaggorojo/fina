import React from 'react'
import "../footer/Footer.css"
import { AiOutlineInstagram } from "react-icons/ai";
import {BsTiktok } from "react-icons/bs";
import { BsWhatsapp} from "react-icons/bs";
import logo from "../footer/logo.png";
   
    
    const Footer = () => {
        return (
    <footer className='piecontenedor'>
    
    
    
    
    
    <div className='footer-link'>
    
    <div className='link'>
       
        <ul>
        <h3>Juegos PC</h3>
            <li>Accion</li>
            <li>Deporte</li>
            <li>Aventura</li>
            <li>Estrategia</li>
        </ul>
    
    </div>
    <div className='link'>
        
        <ul>
        <h3>Juegos Ps4</h3>
            <li>Accion</li>
            <li>Deporte</li>
            <li>Aventura</li>
            <li>Estrategia</li>
        </ul>
    
    </div>
    <div className='link'>
        
        <ul>
        <h3>Juegos Ps5</h3>
            <li>Accion</li>
            <li>Deporte</li>
            <li>Aventura</li>
            <li>Estrategia</li>
        </ul>
        </div>
        <div className='link'>
        
        <img className='logo' src={logo} alt="" srcset="" />
            
        </div>
    <div className='link'> 
    <h2>Seguinos</h2>
    <div className='icons'>
         
        <div > <a href="https://www.instagram.com/thia_villa/"><AiOutlineInstagram/></a> </div>
        <div ><a href=""><BsTiktok/></a></div>
       <div >  <a href="https://wa.me/541135795635"><BsWhatsapp/></a></div>
     
      </div>
    
      </div>
      </div>
      
    
    
    
    
    
    
    
     
    
    
     
     
        </footer>
     
     )
    }
    
    


export default Footer