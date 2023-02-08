import React, { Component } from 'react';
import PrimaryAccess from './accessPrimary';
import SecondaryAccess from './accessSecondary';
import VisibilityAccess from './accessVisibility';

class accessPanelProfile extends Component {
    state = {  } 
    render() { 
        return (
            <div className='col-8 side-bar'>
                <VisibilityAccess />
                <PrimaryAccess topic={"Edit Profile"} />
                <PrimaryAccess topic={"Skills"} />
                <SecondaryAccess topic={"Add Skills"} />
                <SecondaryAccess topic={"Edit Skills"} />
                <PrimaryAccess topic={"Review"}/>
            </div>
        );
    }
}
 
export default accessPanelProfile;