import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { GrFormAdd } from 'react-icons/gr';

class UnspecifiedTopBar extends Component {
    state = {  } 
    render() { 
        return (
            <div className='top-bar col-11 mx-auto mt-5 mb-4 d-flex justify-content-between'>
                <nav className='navbar navbar-expand-lg col-8'>
                    <div className='collapse navbar-collapse align-middle'>
                        <ul className='navbar-nav'>
                            <li className='nav-item active px-2'>
                                <a className='nav-link' href='#'><h3>Specified Accesses</h3></a>
                            </li>
                            <li className='nav-item px-2'>
                                <a className='nav-link' href='#'><h3>Unspecified Accesses</h3></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className='d-flex col-2 h-75 add-access align-self-center px-4 mx-5'>
                    <Form.Control type='text' placeholder='Type Employee Id' className='unspecified-topbar-input' />
                    <button type='button' className='btn'><span className='btn-label'><GrFormAdd size={24}/></span></button>
                </div>
            </div>
        );
    }
}
 
export default UnspecifiedTopBar;