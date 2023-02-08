import React, { Component } from 'react';
import RoleGivenTo from './roleGivenTo';
import EmployeeGivenTo from './employeeGivenTo';

class AccessesBar extends Component {
    state = {  } 
    render() { 
        return (
            <div className='top-bar col-11 mx-auto d-flex mb-5'>
                <EmployeeGivenTo />
                <EmployeeGivenTo />
            </div>
        );
    }
}
 
export default AccessesBar;