import React from 'react'
import './Account.css'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Typography } from '@mui/material'
import FeedbackForm from '../FeedbackForm/FeedbackForm'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'



const Account = () => {
    const { user, isAuthenticated } = useSelector(state => state.user)

    const { doctor } = useSelector(state => state.doctor)
    let img = "";
    let name = "";
    if (user != undefined) {
        img = user.avatar.url;
        name = user.name;
    }
    if (doctor != undefined) {
        img = doctor.avatar.url;
        name = doctor.name;
    }

    window.__be = window.__be || {};
    window.__be.id = "63cbef405430e00007f5aad3";
    (function() {
        var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
        be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
    })();
   
    return (
        <div>
            <div className="accountContainer">
                <img className='userAvatar' src={img}></img>
                <Typography variant='h3' sx={{ marginLeft: "10.6rem", marginTop: "2rem" }}>Hi! {name}</Typography>

            </div>
            {doctor != undefined ?
                <div className="appointmentBtn">
                    <Link to='/myPatients'
                
                ><Button variant='contained' sx={{
                    backgroundColor:"rgb(133, 12, 255)"
                    ,"&:hover": {
                        backgroundColor: "rgb(133, 12, 255)",
                        opacity: 0.8}
                }}>Send Appointment Reminder to Patients</Button></Link> 
                
                </div>: null
            }
        </div>
    )
}

export default Account
