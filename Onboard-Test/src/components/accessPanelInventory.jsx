import React, { Component } from 'react';
import PrimaryAccess from './accessPrimary';
import VisibilityAccess from './accessVisibility';

class AccessPanelInventory extends Component {
    state = {  } 
    render() { 
        return (
            <div className='col-8 side-bar'>
                <VisibilityAccess />
                <PrimaryAccess topic={"Add Category"} />
                <PrimaryAccess topic={"Add Inventory"} />
                <PrimaryAccess topic={"View Inventory"} />
                <PrimaryAccess topic={"Edit Inventory"}/>
            </div>
        );
    }
}
 
export default AccessPanelInventory;