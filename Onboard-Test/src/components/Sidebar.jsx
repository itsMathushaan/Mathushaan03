import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import {FaBars,}from "react-icons/fa";
import Logo from "../Images/logo.png";
import Person2Icon from '@mui/icons-material/Person2';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BadgeIcon from '@mui/icons-material/Badge';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from "@mui/icons-material/Logout";
import SignOut from './SignOut';
// import "../sidebar.css"

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Profile",
            name:"Profile",
            icon:<Person2Icon />
        },
        {
            path:"/AdminDashboard",
            name:"Dashboard",
            icon:<DashboardIcon />
        },
        {
            path:"/Employee",
            name:"Employee",
            icon:<BadgeIcon />
        },
        {
            path:"/Inventory",
            name:"Inventory",
            icon:<InventoryIcon />
        },
        {
            path:"/Access",
            name:"Access",
            icon:<AccessibilityIcon />
        },
        // {
        //     path:"/Support",
        //     name:"Support",
        //     icon:<ContactSupportIcon />
        // },
        {
            path:"/Settings",
            name:"Settings",
            icon:<SettingsIcon />
        // },
        // {
        //     path:"/Login",
        //     name:"Sign out",
        //     icon:<LogoutIcon />
        }
    ]
    return (
        <div className="sidey">
           <div style={{width: isOpen ? "300px" : "80px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src={Logo} alt="logo" className='logosize'/></h1>
                   
                   <div style={{marginLeft: isOpen ? "50px" : "10px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>    
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active"  style={{width: isOpen ? "200px" : "50px"}}>
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
                <SignOut></SignOut>  
           </div>
           <main>{children}</main>
        </div>
        
    );
};

export default Sidebar;