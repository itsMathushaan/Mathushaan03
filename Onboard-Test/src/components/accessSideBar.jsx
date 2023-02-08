import React, { Component } from 'react';

class SideBar extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column flex-shrink-0 p-3 col-2 side-bar'>
                <ul className='nav flex-column mb-auto'> 
                    <li className='nav-item'>
                        <a href='#' className='nav-link active' aria-current='page'><h4 className='side-bar-text'>Profile</h4></a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link' aria-current='page'><h4 className='side-bar-text'>Dashboard</h4></a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link active' aria-current='page'><h4 className='side-bar-text'>Employee</h4></a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link active' aria-current='page'><h4 className='side-bar-text'>Inventory</h4></a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link active' aria-current='page'><h4 className='side-bar-text'>Access</h4></a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link active' aria-current='page'><h4 className='side-bar-text'>Support</h4></a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link active' aria-current='page'><h4 className='side-bar-text'>Settings</h4></a>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default SideBar;