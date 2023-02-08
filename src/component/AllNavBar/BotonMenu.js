import React from 'react'
import "../../Style/botonMenu.css"

function BotonMenu(props) {
  
  return (
    <div onClick={props.handleClicked}  className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  )
}

export default BotonMenu