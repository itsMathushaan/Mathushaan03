import React, { Component } from 'react';
import PrimaryAccess from './accessPrimary';
import VisibilityAccess from './accessVisibility';

class AccessPanelSupport extends Component {
    state = {  } 
    render() { 
        return (
            <div className='col-8 side-bar'>
                <VisibilityAccess />
            </div>
        );
    }
}
 
export default AccessPanelSupport;