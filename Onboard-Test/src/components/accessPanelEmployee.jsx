import React, { Component } from 'react';
import PrimaryAccess from './accessPrimary';
import SecondaryAccess from './accessSecondary';
import VisibilityAccess from './accessVisibility';

class AccessPanelEmployee extends Component {
    state = {  } 
    render() { 
        return (
            <div className='col-8 side-bar'>
                <VisibilityAccess />
                <PrimaryAccess topic={"Inactive/ All Employees"} />
                <PrimaryAccess topic={"View Employess"} />
                <SecondaryAccess topic={"Edit Projects"} />
                <SecondaryAccess topic={"Rate Skills"} />
                <SecondaryAccess topic={"Download Skill Table"} />
                <SecondaryAccess topic={"Add Reviews"} />
                <PrimaryAccess topic={"Add Employee"}/>
            </div>
        );
    }
}
 
export default AccessPanelEmployee;