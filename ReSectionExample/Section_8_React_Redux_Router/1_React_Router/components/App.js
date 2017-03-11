import React from 'react';
import {Link, browserHistory} from 'react-router';

export default function App({children}){
	return(
		<div>
			<header>
				Links: {' '}
				<Link to = '/'>Home</Link> {' '}
				<Link to = '/ex01'>Example 01</Link>{' '}
				<Link to = '/ex02'>Example 02 width parameter</Link>
			</header>
			<div style={{marginTop: '20px'}}>
				<button onClick={()=> browserHistory.push('/ex02')}>Go to Example 02</button>
				<div style={{marginTop: '20px'}}>{children}</div>
			</div>
		</div>
	)
}