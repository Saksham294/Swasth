import { Typography } from '@mui/material'
import React from 'react'

import './Background.css'
function Background() {
    const imgbg="https://img.freepik.com/free-vector/family-doctor-abstract-concept-vector-illustration-visit-your-doctor-medical-family-practice-primary-healthcare-provider-general-practitioner-physician-service-insurance-abstract-metaphor_335657-1545.jpg?w=2000"
    return (
        <div className='bg'>
<img src={imgbg} ></img>
           <div className="centered">Swastha</div>
           <div className='centered2'>Tools to help you automate your Patient Outcomes</div>
        </div>
    )
}

export default Background
