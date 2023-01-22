import React from 'react'
import './MyPatients.css'
import { useSelector, useDispatch } from 'react-redux'
import { getMyPatients } from '../../../Actions/userActions'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send';
import { Typography } from '@mui/material'

const MyPatients= () => {
    const {doctor} = useSelector(state => state.doctor)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getMyPatients())
    },[dispatch])

    return (
        <div><Typography variant='h3' sx={{textAlign:"center",marginBottom:"3rem"}}>Your Patients</Typography>
            <table className='table'>
                <thead>
                    
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Send Appointment</th>
                    </tr>
                </thead>
                <tbody>
                    {doctor.patients? doctor.patients.map((patient)=>{
                        return(
                            <tr>
                                <td>{patient.name}</td>
                                <td>{patient.phone}</td>
                                <td><Link to={`sendSMS/${patient.phone}`}><SendIcon/></Link></td>
                            </tr>
                        )
                    }):null}
                </tbody>
            </table>
        </div>
    )
}

export default MyPatients
