import React, { Component } from 'react';
import VisibilityAccess from './accessVisibility';

class AccessPanelDashboard extends Component {
    state = {  } 
    render() { 
        return (
            <div className='col-8 side-bar'>
                <VisibilityAccess />
            </div>
        );
    }
}
 
export default AccessPanelDashboard;