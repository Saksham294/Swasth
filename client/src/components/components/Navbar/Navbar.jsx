import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import logoSwastha from '../../../logoSwastha.png'

import './Navbar.css'
import { Button } from '@mui/material';
import MenuBar from './MenuBar';
function Navbar() {
    const { isAuthenticated } = useSelector((state) => state.user);
    const { isDocAuthenticated } = useSelector((state) => state.doctor);

    return (
        <div className='navMain'>
            <Link to='/'><img className='logo' src={logoSwastha} alt="logo" /></Link>
            <div className="nav">

                <div className="home"><Link className='link' to="/" style={{ textDecoration: 'none' }} >Home</Link></div>

                <div className="about-us"><Link className='link' to="/about" style={{ textDecoration: 'none' }} >About Us</Link></div>



            </div>
            {isAuthenticated || isDocAuthenticated ? <MenuBar className='menuBar' /> : <div className="login"><Link className='link' to="/login" style={{ textDecoration: 'none' }}>Login</Link></div>}

        </div>
    )
}

export default Navbar
