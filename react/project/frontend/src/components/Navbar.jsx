import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="link">
    <Link to ="/home">Home</Link>
    <Link to ="/about">About</Link>
    <Link to ="/service">Services</Link>
    <Link to ="/contact">Contact</Link>
    </div>
  )
}
export default Navbar;