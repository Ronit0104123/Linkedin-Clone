import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from './linkedin-logo.png';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from "./features/userSlice.js"
import {auth} from './firebase.js'

function Header() {
  
 

  const dispatch=useDispatch();

  const logOutOfApp= () => {
    dispatch(logout());
    auth.signOut();
  }
  
  return (
    <div className="header">

       <div className="header__left">
       <img src={logo} alt="LinkedIn logo" />

        <div className="header__search">
            <SearchIcon/>
            <input placeholder="Search" type="text"/>
        </div>
       </div>
       <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar={true} onClick={logOutOfApp} title ="me"/>
       </div>
    </div>
  )
}

export default Header