import React from 'react'
import "./Sidebar.css"
import coverPhoto from "./codioful-formerly-gradienta-LeG68PrXA6Y-unsplash.jpg"
import {selectUser} from './features/userSlice';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';

function Sidebar() {

    const user=useSelector(selectUser);

    const recentItem=(topic) => ( 
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )



  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img className="cover__photo" src={coverPhoto} alt="" />
            <Avatar className="sidebar__avatar" src={user.photoUrl} >{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2513</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">3647</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("DSA")}
            {recentItem("design")}
            {recentItem("developer")}
            {recentItem("coding")}
        </div>
    </div>
  )
}

export default Sidebar