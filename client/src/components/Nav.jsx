import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <nav className="navbar">
      <h4>Video Game To Do List</h4>
      <div>
        <NavLink to="/list/:username">Home</NavLink>
        <NavLink to="/new">New Game</NavLink>
      </div>
    </nav>
  )
}

export default Nav
