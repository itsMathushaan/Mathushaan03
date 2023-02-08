import React, { Component } from 'react';

class StatButton extends Component {
    state = {
        statTopicLineOne: "Total",
        topic: this.props.topic,
        count: this.props.count
    };

    render() { 
        return (
            <React.Fragment>
                <button className='btn col-3 statbtn'>
                    <div className='d-flex justify-content-around'>
                        <h4 className='px-2 text-left'>{this.state.statTopicLineOne}<br></br>{this.state.topic}</h4>
                        <h2 className='px-2 align-self-center'><b>{this.state.count}</b></h2>
                    </div>
                </button>
            </React.Fragment>
        );
    }
}
 
export default StatButton;