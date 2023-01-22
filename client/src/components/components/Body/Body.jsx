import React from 'react'
import { Typography } from '@mui/material'
import Footer from '../Footer/Footer'
import './body.css'
function Body() {

    const img1="https://img.freepik.com/free-vector/speech-text-concept-illustration_114360-4162.jpg?size=338&ext=jpg&ga=GA1.2.384973956.1661681986&semt=sph"
    const img2="https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5035.jpg?size=626&ext=jpg&ga=GA1.2.384973956.1661681986&semt=sph"
   const img3="https://img.freepik.com/free-vector/illustration-happy-healthy-family_53876-37126.jpg?size=626&ext=jpg&ga=GA1.2.384973956.1661681986&semt=sph"
    return (
        <div>
           <div className='bodyHeading1' >
            <Typography variant='h2'>We are Swastha</Typography>
           </div>
           <div className="bodyBox1">
<img className='img1' src={img1}></img>
<div className="contentBox1"><Typography variant='h4'>We provide tools that simplify taking Patient-reported outcome measures</Typography></div>
           </div>
           <div className="bodyBox2">
           <div className="contentBox2"><Typography variant='h4'>Our automated tools help you to generate accurate PROs without any hassle.</Typography></div>
<img className='img2' src={img2}></img>

           </div>
           <div className="bodyBox1">
<img className='img3' src={img3}></img>
<div className="contentBox1"><Typography variant='h4'>Take feedback from your patients and provide valuable healthcare</Typography></div>
           </div>

        </div>
    )
}

export default Body
