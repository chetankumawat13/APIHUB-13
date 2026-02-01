import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-3 bg-[#bdf7b7]'>
      
      <NavLink 
        to="/" 
        className={({ isActive }) =>
          `text-2xl font-bold cursor-pointer ${
            isActive ? 'text-blue-700' : 'text-[#020617]'
          }`
        }
      >
        Hub-13
      </NavLink>

      <nav>
        <ul className='flex space-x-4'>
          
          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <li>
            <NavLink to="/AddNewApi" className="text-black">
              Add New API
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
