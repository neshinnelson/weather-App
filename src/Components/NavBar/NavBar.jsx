import React from 'react'
import './navBar.css'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='nav-bar-page'>
        <div className="nav-bar">
            <Link to={'/'} className='no-dec'><h3 className='site-name'>Insta Weather</h3></Link>
            <div className="nav-bar-right-end">
                <ul>
                    <Link to={'/about-us'} className='no-dec'><li>About Us</li></Link>
                    <Link to={'/contact-us'} className='no-dec'><li>Contact Us</li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
