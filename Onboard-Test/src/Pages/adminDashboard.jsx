import React from 'react';
import '../CSS/app.css';
import StatButtons from "../components/statButtonsAdmin";
import Buttons from "../components/buttons";
import TableContainer from '../components/tableContainer';

function AdminDashboard() {
    return(
        <div>
            <StatButtons />
            <Buttons />
            <TableContainer topic={"Employees"}/>
        </div>
    );
}

export default AdminDashboard;