import React from 'react';
import {render} from 'react-dom';
import Examples from './components/Examples';
import Examples02 from './components/Examples02';
import App from './components/App';
import store from './redux/store/index';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="ex01" component={Examples}/>
                <Route path="ex02" component={Examples02}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);