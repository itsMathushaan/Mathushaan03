import React, { Component } from 'react';

class Button extends Component {
    state = { 
        topic: this.props.topic
    };

    render() { 
        return (
            <React.Fragment>
                <button className='btn cstm-btn col-2'><h4>{this.state.topic}</h4></button>
            </React.Fragment>
        );
    }
}
 
export default Button;