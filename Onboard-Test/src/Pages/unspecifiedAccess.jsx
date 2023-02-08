import React from 'react';
import '../app.css';
import BottomBar from '../components/accessBottomBar';
import AccessesBar from '../components/accessesBar';
import UnspecifiedAccessTopBar from '../components/unspecifiedAccessTopBar'
import SpecifiedTopBar from '../components/specifiedAccessTopBar';

function UnspecAccess() {
    return ( 
        <div>
            <UnspecifiedAccessTopBar />
            <AccessesBar />
            <BottomBar />
        </div>
     );
}

export default UnspecAccess;