import React from 'react'
import MenuLateral from './MenuLateral'

const NavBar = () => {
  return (
    <>
    <div className="top-menu">
      <MenuLateral />
      <div className="search">Buscar</div>
      <div className="menu-principal">
        <nav>
        <ul className="nav-bar">
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Nesletter</a></li>
          <li><a href="/">La Tercerca PM</a></li>
          <li><a href="/">Pulso PM</a></li>
          <li><a href="/">LT Sábado</a></li>
          <li><a href="/">LT Domingo</a></li>
          <li><a href="/">Club La Tercera</a></li>
          <li><a href="/">Sucursal Virtual</a></li>
        </ul>
        </nav>
      </div>
      <div className="suscription">Suscripción</div>
      <div className="sesion">Inicio de sesión</div>
    </div>
    </>
  )
}

export default NavBar