import React, { Component } from 'react';
import Button from './button';

class Buttons extends Component {
    state = { 
        buttons: [
            { id: 1, topic: "Announcements" },
            { id: 2, topic: "Complaints" },
            { id: 3, topic: "In-Chat" },
            { id: 4, topic: "Meetings" }
        ]
    };

    render() { 
        return (
            <div className='d-flex justify-content-around pb-5'>
                { this.state.buttons.map(button =>
                    <Button key={button.id} topic={button.topic} />    
                )}
            </div>
        );
    }
}
 
export default Buttons;