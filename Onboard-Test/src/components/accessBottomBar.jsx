import React, { Component } from 'react';
import AccessPanelAccess from './accessPanelAccess';
import AccessPanelDashboard from './accessPanelDashboard';
import AccessPanelEmployee from './accessPanelEmployee';
import AccessPanelInventory from './accessPanelInventory';
import AccessPanelProfile from './accessPanelProfile';
import AccessPanelSettings from './accessPanelSettings';
import AccessPanelSupport from './accessPanelSupport';
import SideBar from './accessSideBar';

class BottomBar extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex justify-content-around'>
                <SideBar />
                <AccessPanelSupport />
            </div>
        );
    }
}
 
export default BottomBar;