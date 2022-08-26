import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import plane from '../image/plane.png'
import  {useState, useEffect} from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <div className='bodycon'>
    <div className='navContainer'> 
    <img  className='logoimg' src={plane} alt='' />
    <h2 className='logotxt'>Arctic Travels</h2>
    <nav>
    {(toggleMenu && 
   
    <nav className='navlinks'>
      <NavLink className='items' to ="/about">About Us</NavLink>
      <NavLink className='items' to ="/support">Support</NavLink>
      <NavLink className='items' to ="/">FAQ</NavLink>
      <NavLink className='itemsSigin' to ="signin">Sign in</NavLink>
    </nav>
    )}
    <div onClick={toggleNav} className='naviconcon'>
    <div className='firstnavicon'></div>
    <div className='sndnavicon'></div>
    <div className='thirdnavicon'></div>
    </div>
    </nav>
    </div>
    
    <h1 className='mycolotxt'>Plan the perfect winter trip</h1>
    <p className='mycolotxt2'>Easily plan your ideal ski trip from home with the help of professionals</p>
    </div>
  )
}

export default Navbar