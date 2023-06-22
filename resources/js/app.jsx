import './bootstrap';
import React from 'react';
import * as ReactDOM from 'react-dom/client';

import Display from './Components/Display';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div style={{ display:"flex", justifyContent:"center"}}>
        <Display/>
    </div>
    
)