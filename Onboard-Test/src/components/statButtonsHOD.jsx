import React, { Component } from 'react';
import StatButton from './statButton';

class StatButtons extends Component {
    state = { 
        statButtons: [
            { id: 1, topic: "Projects", count: 23 },
            { id: 2, topic: "Departments", count: 6 }
        ]
    };

    render() { 
        return (
            <div className='d-flex justify-content-around py-5'>
                { this.state.statButtons.map(statButton => 
                    <StatButton key={statButton.id} topic={statButton.topic} count={statButton.count} />
                )}
            </div>
        );
    }
}
 
export default StatButtons;