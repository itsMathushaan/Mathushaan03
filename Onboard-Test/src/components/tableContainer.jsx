import React, { Component } from 'react';
import Table from './table';

class TableContainer extends Component {
    state = {
        topic: this.props.topic
    };

    render() { 
        return (
            <div>
                <h3 className='px-5 pt-5 mx-5'><b>{this.state.topic}</b></h3>
                <section className="d-flex justify-content-center">
                    <div className="mt-5 px-5 pt-4 col-11 table-container">
                        <Table />
                    </div>
                </section>
            </div>
        );
    }
}
 
export default TableContainer;