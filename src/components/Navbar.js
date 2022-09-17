import React from 'react'
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img src={logo} />
            <h4>Leanpitch</h4>
        </div>

        <div className='navbar-right'>
            <button>Subscribe</button>
            <h5>Contatct Us</h5>
        </div>
    </div>
  )
}

export default Navbar