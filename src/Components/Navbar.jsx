import React, { useState } from 'react'
import { Link } from 'react-router-dom'

  const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="bg-[#1e4b8f] text-[#FFD166] px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Digital Time Capsule
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
       {/*    <li><Link to="/about" className="hover:text-white">About</Link></li> */}
        {/*    <li><Link to="/mycapsul" className="hover:text-white">My Capsules</Link></li>  */}
          <li><Link to="/login" className="hover:text-white">Login</Link></li>
      {/*     <li><Link to="/signup" className="hover:text-white">Signup</Link></li> */}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-[#FFD166]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-3 space-y-3 text-sm font-medium">
          <li><Link to="/" className="block hover:text-white">Home</Link></li>
          <li><Link to="/about" className="block hover:text-white">About</Link></li>
        {/*   <li><Link to="/mycapsul" className="block hover:text-white">My Capsules</Link></li> */}
          <li><Link to="/login" className="block hover:text-white">Login</Link></li>
          <li><Link to="/signup" className="block hover:text-white">Signup</Link></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar