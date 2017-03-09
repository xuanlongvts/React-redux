import React from 'react';
import {render} from 'react-dom';
import Examples from './components/Examples';
import store from './redux/store/index';
import {Provider} from 'react-redux';
//import {decrease, getSum, getRandomImages} from './redux/actions/index';

// function render() {
//     ReactDOM.render(
//         <Examples
//         	value={store.getState()}
//         	onDecrement = {() => store.dispatch(decrease())}
//         	onSum = {(a,b) => store.dispatch(getSum(a,b))}
//         	onRandomImages = {() => store.dispatch(getRandomImages)}
//         />,
//         document.getElementById('root')
//     );
// }

// render();
// store.subscribe(render);

render(
	<Provider store={store}>
		<Examples />
	</Provider>,
	document.getElementById('root')
)
