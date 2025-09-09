import React, { act, useState } from 'react'
import { NavLink } from 'react-router-dom'
import tarslogo from '../assets/icons/tarslogo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const activeClass = "border-b-1 border-white pb-1 duration-300"

  return (
    <>
      <nav className='fixed w-full z-50 flex justify-between items-center px-6 lg:px-16 py-5 lg:py-8 bg-black text-white'>
        <NavLink to='/'>
          <img src={tarslogo} className='w-[100px] lg:w-[190px] ' />
        </NavLink>

        {/* desktop view */}
        <div className='hidden md:flex gap-8 lg:gap-14 text-[16px] '>
          <p><NavLink to='/about' className={({isActive}) => isActive ? `${activeClass}` : ""} >ABOUT</NavLink></p>
          <p><NavLink to='/services' className={({isActive}) => isActive ? `${activeClass}` : ""} >SERVICES</NavLink></p>
          <p><NavLink to='/product' className={({isActive}) => isActive ? `${activeClass}` : ""} >PRODUCT</NavLink></p>
          <p><NavLink to='/cases' className={({isActive}) => isActive ? `${activeClass}` : ""} >CASES</NavLink></p>
          <p><NavLink to='/blogs' className={({isActive}) => isActive ? `${activeClass}` : ""} >BLOG</NavLink></p>
          <p><NavLink to='/contact' className={({isActive}) => isActive ? `${activeClass}` : ""} >CONTACT</NavLink></p>
        </div>
        <button className='hidden md:block border border-white rounded-[8px] w-[196px] h-[49px] text-[18px] font-[600] hover:bg-white hover:text-black duration-300 '>Get a Free Quote</button>

        {/* mobile view */}
        <div className='block md:hidden'>
          <button onClick={toggleMenu} >
            {isMenuOpen ? (
              <IoCloseOutline className='text-white w-5 md:w-7 h-auto '/>
            ) : (
              <RxHamburgerMenu className='text-white w-5 md:w-7 h-auto' />
            )}
          </button>
        </div>
      </nav>


      {isMenuOpen && (
        <div className='md:hidden text-center space-y-5 pt-22 pb-7 bg-black text-white text-[12px] '>
          <p onClick={toggleMenu}><NavLink to='/about' className={({isActive}) => isActive ? `${activeClass}` : ""} >ABOUT</NavLink></p>
          <p onClick={toggleMenu}><NavLink to='/services' className={({isActive}) => isActive ? `${activeClass}` : ""} >SERVICES</NavLink></p>
          <p onClick={toggleMenu}><NavLink to='/product' className={({isActive}) => isActive ? `${activeClass}` : ""} >PRODUCT</NavLink></p>
          <p onClick={toggleMenu}><NavLink to='/cases' className={({isActive}) => isActive ? `${activeClass}` : ""} >CASES</NavLink></p>
          <p onClick={toggleMenu}><NavLink to='/blogs' className={({isActive}) => isActive ? `${activeClass}` : ""} >BLOG</NavLink></p>
          <p onClick={toggleMenu}><NavLink to='/contact' className={({isActive}) => isActive ? `${activeClass}` : ""} >CONTACT</NavLink></p>
        <button onClick={toggleMenu} className='border border-white rounded-[8px] w-[130px] h-[35px] font-[600] hover:bg-white hover:text-black duration-300 '>Get a Free Quote</button>
        </div>
      )}
    </>
  )
}

export default Navbar
