import React from 'react';
import {Link, browserHistory} from 'react-router';

export default function App({children}) {
    return(
        <div>
            <header>
                Links:
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/">Home</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/ex02">Example02</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/ex02/NongNo">Example02 with parameter</Link>
            </header>
            <div>
                <br />
                <button onClick={()=> browserHistory.push('/ex02')}>Go to /Example02</button>
            </div>
            <div style={{marginTop: '1.5em'}}>{children}</div>
        </div>
    )
}