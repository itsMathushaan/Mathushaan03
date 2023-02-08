import React from 'react';
import '../app.css';
import StatButtons from '../components/statButtonsHOD';
import TableContainer from '../components/tableContainer';

function HODDashboard() {
    return (
        <div>
            <StatButtons />
            <TableContainer topic={"Employees"}/>
        </div>
    );
}

export default HODDashboard;