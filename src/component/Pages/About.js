import React from 'react'
import './about.css'
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsPerson} from 'react-icons/bs';
import {FiCalendar} from 'react-icons/fi';
import {IoIosAirplane} from 'react-icons/io';



const About = () => {
  return (
   <>
   <div className='trip-con'>
   <div className='booktrip'>
   <div className='fstrpcon'>
    <h3   className='location-txt'><HiOutlineLocationMarker className='locaion-icon'/>LOCATION</h3>
    <select id="countries">
  <option value="Iceland">Iceland</option>
  <option value="Scotland">Scotland</option>
  <option value="England">England</option>
  <option value="Northern Ireland">Northern Ireland</option>
</select>
</div>
<div className='sndtripcon'>
    <h3 className='person-txt'><BsPerson className='person-icon'/> PERSONS</h3>
    <select id="persons">
  <option value="Iceland">1 Person</option>
  <option value="2 Person">2 Person</option>
  <option value="England">3 Person</option>
  <option value="4 Person">4 Person</option>
</select>
    </div>
    <div className='thrdtrippcon'>
    <h3 className='checkin-txt'><FiCalendar className='checkin-icon'/>CHECK IN</h3>
    <select id="check-in">
  <option value="12 january 2022">12 january 2022</option>
  <option value="13 january 2022">13 january 2022</option>
  <option value="14 january 2022">14 january 2022</option>
  <option value="15 january 2022">15 january 2022</option>
</select>
    </div>
    <div className='forthtrippcon'>
     <h3 className='checkout-txt'> <FiCalendar className='checkout-icon'/>CHECK OUT</h3>
     <select id="check-out">
  <option value="18 january 2022">18 january 2022</option>
  <option value="19 january 2022">19 january 2022</option>
  <option value="20 january 2022">20 january 2022</option>
  <option value="21 january 2022">21 january 2022</option>
</select>
    </div>
    <button className='booktripbtn'>Book Trip <IoIosAirplane className='plane-btn'/></button>
    </div>
</div>




    
    <div>
   
    </div>
    </>
  )
}

export default About