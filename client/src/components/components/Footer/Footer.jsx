import React from 'react'
import './Footer.css'
import {FaInstagram} from 'react-icons/fa/'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='footerbg'>
<div className="socialsmedia">
    <div className="fbicon2">
    <FaFacebook size={40}/>
    </div>
<div className="instaicon2">
<FaInstagram size={40}/>
</div>
<div className="twticon2">
<FaTwitter size={40}/>
</div>

</div>
            <div className="tabs">
                <ul className='tabsList'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Explore</li>
                   
                </ul>
            </div>
            <p>Swastha© 2023</p>
        </div>
    )
}

export default Footer
