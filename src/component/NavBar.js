import React, {useState} from 'react'
import { GiIfrit, GiBatMask, GiAura, GiAmbulance, GiInfo, GiVibratingSmartphone } from "react-icons/gi";
import BotonMenu from './BotonMenu';
import Logo from "../img/Logo-SuperPig.png";
import "../Style/navBar.css";

function NavBar() {

  const[clicked, setClicked]=useState(false)
  
  const handleClicked = ()=>{
    setClicked(!clicked)
  }

  return (
      <div className='navBar'>
        <div className="conjuntoElementos" > 
          <h2>Super <span>PIG</span></h2>
          <img src={Logo} alt="Cerdito" className='logo' />
          <div className="conjunto"> {/* Fila de elementos */}
            <a className='categoria' href="/"><i><GiBatMask/></i>Comics</a>
            <a className='categoria' href="/"><i><GiIfrit/></i>Figuras</a>
            <a className='categoria' href="/"><i><GiAmbulance/></i> Juguetes</a>
            <a className='categoria' href="/"><i><GiAura/></i>Mangas</a>
            <a className='cateUsuario' href="/"><i><GiVibratingSmartphone/></i>Usuario</a>
          </div>
          <div className={`box ${clicked ? 'Activo' : ''}`}>  {/* Box de elementos */}
            <a className='usuario Activo' href="/"><i><GiVibratingSmartphone/></i>Usuario</a>
            <a className='categoria Activo' href="/"><i><GiBatMask/></i>Comics</a>
            <a className='categoria Activo' href="/"><i><GiIfrit/></i>Figuras</a>
            <a className='categoria Activo' href="/"><i><GiAmbulance/></i> Juguetes</a>
            <a className='categoria Activo' href="/"><i><GiAura/></i>Mangas</a>
          </div>         
          <div className='boton'>
            <BotonMenu clicked={clicked} handleClicked={handleClicked}/>
          </div>
        </div>
          <div className={`initial ${clicked ? 'active' : ''}`}></div>
        </div>
  )
}

export default NavBar