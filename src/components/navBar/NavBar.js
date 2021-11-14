import React from 'react'
import "./NavBar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
const NavBar = () => {
    return (
        <div className="navBar">
            <div className = "navBarWrapper">
                <div className="navLeft">
                    <span className="logo">TP Admin</span>
                </div>
                <div className="navRight">
                    <div className="navBarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="navIconBadge">2</span>
                    </div>
                    <div className="navBarIconContainer">
                        <SettingsIcon />
                    </div>          
                <img className="navAvatar" src="./navAvatar.jpg" alt="avatar"/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
