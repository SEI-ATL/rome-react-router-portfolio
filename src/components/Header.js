import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <a><Link to='/'>Home</Link> </a>
      <a><Link to='/blog'>Blog</Link> </a>
      <a><Link to='/about'>About</Link> </a>
      <a><Link to='/projects'>Projects</Link> </a>
      <a><Link to='/weather'>Weather</Link> </a>
    </nav>
  )
}

export default Header;