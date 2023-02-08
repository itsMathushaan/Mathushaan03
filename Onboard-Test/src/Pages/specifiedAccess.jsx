import React from 'react';
import '../app.css';
import BottomBar from '../components/accessBottomBar';
import AccessesBar from '../components/accessesBar';
import SpecifiedTopBar from '../components/specifiedAccessTopBar';

function SpecAccess() {
    return ( 
        <div>
            <SpecifiedTopBar />
            <AccessesBar />
            <BottomBar />
        </div>
     );
}

export default SpecAccess;