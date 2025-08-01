import * as React from 'react'
import { Link } from 'gatsby'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/music">Music</Link>
      <Link to="/anime">Anime</Link>
    </nav>
  )
}

export default NavBar
