import React, { Component } from 'react';

class SecondaryAccess extends Component {
    state = { 
        topic: this.props.topic
     } 
    render() { 
        return (
            <div className='d-flex px-5 pt-2 justify-content-between'>
                <h4 className='col-2 px-2 access-topic-secondary'>{this.state.topic}</h4>
                <div className='d-flex col-9'>
                    <div className='form-check px-5 col-4'>
                        <input className='form-check-input p-2 mx-3 rounded' type='radio' name='visibility' id='visibile' />
                        <label className='form-check-label' for='visible'><h4 className='access-options'>No Access</h4></label> 
                    </div>
                    <div className='form-check px-5 col-4'>
                        <input className='form-check-input p-2 mx-3 rounded' type='radio' name='visibility' id='notVisibile' />
                        <label className='form-check-label' for='notVisible'><h4 className='access-options'>View-only</h4></label> 
                    </div>
                    <div className='form-check px-5 col-4'>
                        <input className='form-check-input p-2 mx-3 rounded' type='radio' name='visibility' id='notVisibile' />
                        <label className='form-check-label' for='notVisible'><h4 className='access-options'>Edit Access</h4></label> 
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SecondaryAccess;