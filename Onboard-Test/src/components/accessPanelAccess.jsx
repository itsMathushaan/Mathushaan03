import React, { Component } from 'react';
import PrimaryAccess from './accessPrimary';
import VisibilityAccess from './accessVisibility';

class AccessPanelAccess extends Component {
    state = {  } 
    render() { 
        return (
            <div className='col-8 side-bar'>
                <VisibilityAccess />
                <PrimaryAccess topic={"Profile"} />
                <PrimaryAccess topic={"Dashboard"} />
                <PrimaryAccess topic={"Employee"} />
                <PrimaryAccess topic={"Inventory"}/>
                <PrimaryAccess topic={"Access"}/>
                <PrimaryAccess topic={"Support"}/>
                <PrimaryAccess topic={"Settings"}/>
            </div>
        );
    }
}
 
export default AccessPanelAccess;