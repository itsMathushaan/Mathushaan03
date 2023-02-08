import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { GrFormAdd } from 'react-icons/gr';

class SpecifiedTopBar extends Component {
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

                <div className='d-flex h-75 add-access align-self-center px-4 mx-5'>
                    <Dropdown className='align-self-center'>
                        <Dropdown.Toggle variant="success" id="dropdownMenuButton">
                            <h4 className='px-1'>Choose Role...</h4>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#"><h4>HOD</h4></Dropdown.Item>
                            <Dropdown.Item href="#"><h4>HR Manager</h4></Dropdown.Item>
                            <Dropdown.Item href="#"><h4>HR</h4></Dropdown.Item>
                            <Dropdown.Item href="#"><h4>Project Manager</h4></Dropdown.Item>
                            <Dropdown.Item href="#"><h4>Software Engineer</h4></Dropdown.Item>
                            <Dropdown.Item href="#"><h4>Systems Engineer</h4></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button type='button' className='btn'><span className='btn-label'><GrFormAdd size={24}/></span></button>
                </div>
            </div>
        );
    }
}
 
export default SpecifiedTopBar;