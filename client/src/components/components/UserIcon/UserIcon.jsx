import { Avatar } from '@mui/material'
import React from 'react'
import './UserIcon.css'
import {Typography} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const UserIcon = ({ userId, name, avatar,inTl,inPg }) => {
  
    return (
        <div>
          <div className="usericonbox">

            <Link to={`/user/${userId}`}  style={{ textDecoration: 'none' }}>
                {/* <AccountCircleIcon sx={inPg?{fontSize:50,marginTop:"2rem"}:{fontSize:30,marginTop:"0"}}/>  */}
                <div className='userIcon'>
            <Avatar className='userImage' src={avatar}></Avatar>
            <p>{name}</p>
        </div>

            </Link>

          </div>
        </div>
    )
}

export default UserIcon
