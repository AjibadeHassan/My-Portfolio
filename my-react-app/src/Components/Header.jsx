import React, { useState } from 'react'
import Profile from '../assets/hassan.jpg'
import Mobile from './Mobile'

const Header = () => {

    const [show, setShow] = useState(false)

    const Check = () =>{
      if(show) {
        setShow(false)
      } else {
        setShow(true)
      }
    }
  return (
    <div>
        <header className='Header'>
           <span className='Image_holder'>
           <img src={Profile} alt="profile picture" />
           <h3>AJIBADE HASSAN</h3>
           </span>
            <ul className='Nav_links'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <div className='Menu' onClick={Check}>Menu</div>
            {
                show? <Mobile/> : null
            }
        </header>
    </div>
  )
}

export default Header