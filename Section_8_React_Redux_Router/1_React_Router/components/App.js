import React from 'react';
import {Link, browserHistory} from 'react-router';

export default function App({children}) {
    return(
        <div>
            <header>
                Links:
                {' '}
                <Link to="/">Home</Link>
                {' '}
                <Link to="/ex01">Example01</Link>
                {' '}
                <Link to="/ex02">Example02 with parameter</Link>
            </header>
            <div>
                <button onClick={()=> browserHistory.push('/ex02')}>Go to /Example02</button>
            </div>
            <div style={{marginTop: '1.5em'}}>{children}</div>
        </div>
    )
}