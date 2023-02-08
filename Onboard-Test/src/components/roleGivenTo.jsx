import React, { Component } from 'react';
import { GrFormClose } from 'react-icons/gr';

class RoleGivenTo extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex h-75 add-access align-self-center px-4 mx-3'>
                <label className='align-self-center my-auto'><h5>Software Engineer</h5></label>
                <button type='button' className='btn'><span className='btn-label'><GrFormClose size={24}/></span></button>
            </div>
        );
    }
}
 
export default RoleGivenTo;