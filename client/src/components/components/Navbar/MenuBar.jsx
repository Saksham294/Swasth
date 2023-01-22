import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
// import {AiOutlinePlus} from '@react-icons/all-files/ai/AiOutlinePlus'
import './Navbar.css'
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { logoutUser, logoutDoctor } from '../../../Actions/userActions';
import './MenuBar.css'


const MenuBar = () => {

  const { user, loading: userLoading } = useSelector((state) => state.user)
  const { doctor, loading: docLoading } = useSelector((state) => state.doctor)
  let userImage = "";
  if (user != undefined && user.avatar != undefined) {
    userImage = user.avatar.url;
  }
  else if (doctor != undefined && doctor.avatar != undefined) {
    userImage = doctor.avatar.url;
  }
  else {
    userImage = undefined;
  }

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);


  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    if (user != undefined) {
      dispatch(logoutUser())
    }
    else if (doctor != undefined) {
      dispatch(logoutDoctor())
    }
    console.log("Logged out")
  }




  return (
    <div>
      <Tooltip title="Account settings" >
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: "40px", mt: "25px" }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          {userImage != undefined ? <Avatar sx={{ width: 32, height: 32 }} src={userImage} /> : <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>}

        </IconButton>
      </Tooltip>
      <Menu

        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <Link className='link' to="/myForms" style={{ textDecoration: 'none' }}>
          <MenuItem>

            My Feedback Forms

          </MenuItem>
        </Link>
        {doctor!=undefined? <Link className='link' to="/myPatients" style={{ textDecoration: 'none' }}><MenuItem>My Patients</MenuItem></Link>:null}

        <Link className='link' to="/account" style={{ textDecoration: 'none' }}>
          <MenuItem>

            My Profile

          </MenuItem>
        </Link>
        <Divider />


        <MenuItem onClick={logoutHandler}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      {/* <Link to='newPost'> <div className="newpost"><Button><AiOutlinePlus style={{fontSize:"1.5rem", color:"black"}}/></Button></div></Link>*/}
    </div>
  )
}

export default MenuBar
