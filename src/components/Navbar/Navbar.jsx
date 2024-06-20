import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import Cart from '../../pages/Cart/Cart';
const Navbar = ({SetShowLogin }) => {
    const[menu, setMenu] = useState("home");    //setUnderline 

  return (
    <div>
        <div className="navbar">
            
           <Link to="/"> <img src={assets.logo} className='navbar-logo' /></Link>
            <ul className='navbar-menu'>
 
            {/*   set Classname as active or nothing as the one which is active gets underline 
                on the css */}
                <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>         
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact-Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} className='navbar-search-icon' />
                <div className="dot" />     {/*This part Pending*/}
            <Link to='/cart'> <img src={assets.basket_icon} className='navbar-basket-icon' /> </Link>
            </div>
            <button className='navbar-sign-in' onClick={()=>{SetShowLogin(true)}}>Sign In</button>

        </div>

    </div>
  )
}

export default Navbar