import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarStyles.css"

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to = "/">Home</Link>
      <Link to = "/registerPage">RegisterPage</Link>
      <Link to = "/loginPage">LoginPage</Link>
    </nav>
  )
}
