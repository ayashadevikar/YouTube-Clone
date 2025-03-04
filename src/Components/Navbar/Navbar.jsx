import React from 'react';
import './Navbar.css';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import more from '../../assets/more.png'
import notification from '../../assets/notification.png'
import user_icon from '../../assets/jack.png';
import { Link } from 'react-router-dom';

const Navbar = ({setSidebar}) => {
  return (
    <nav className='navbar'>

         <div className='nav-left flex-div'>
             <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu} alt="menu-img" />
             <Link to='/'><img className='logo' src={logo} alt="logo-img" /></Link>
         </div>

         <div className='nav-middle'>
             <input type="text" placeholder='Search' />
             <img src={search} alt="search-img" />
         </div>

         <div className='nav-right'>
            <img src={upload} alt="upload-img" />
            <img src={more} alt="more-img" />
            <img src={notification} alt="notification-img" />
            <img src={user_icon} className='user-icon' alt="user_profile-img" />
         </div>

    </nav>
  )
}

export default Navbar