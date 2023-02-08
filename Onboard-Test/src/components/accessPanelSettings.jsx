import React, { Component } from 'react';
import PrimaryAccess from './accessPrimary';
import VisibilityAccess from './accessVisibility';

class AccessPanelSettings extends Component {
    state = {  } 
    render() { 
        return (
            <div className='col-8 side-bar'>
                <VisibilityAccess />
                <PrimaryAccess topic={"Profile"} />
                <PrimaryAccess topic={"Privacy"} />
                <PrimaryAccess topic={"Audit Log"} />
            </div>
        );
    }
}
 
export default AccessPanelSettings;