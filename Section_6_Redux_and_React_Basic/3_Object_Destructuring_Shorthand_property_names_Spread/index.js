import React from 'react';
import ReactDOM from 'react-dom';
import Examples from './components/Examples';
import store from './redux/store/index';
import {decrease, getSum, getRandomImages} from './redux/actions/index';

const state = {loading:'loading...', b:'B'};
console.log('obj: ', {...state});
const update = {loading:'loaded', c:'C'};
console.log('obj2: ', {...state, ...update});

function render() {
    ReactDOM.render(
        <Examples value = {store.getState()}
            onDecrement = {() => store.dispatch(decrease())}
            onSum = {(a,b) => store.dispatch(getSum(a,b))}
            onRandomImages = {() => store.dispatch(getRandomImages)}
        />,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);