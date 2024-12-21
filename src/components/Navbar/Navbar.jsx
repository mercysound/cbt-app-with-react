import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-container">
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/setquestions"><li>Set Question</li></Link>
            <Link to="/displayquestions"><li>Display Question</li></Link>
        </ul>
      </div>  
    </div>
  )
}

export default Navbar;