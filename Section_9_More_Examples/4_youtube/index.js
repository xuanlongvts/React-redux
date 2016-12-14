import React from 'react';
import {render} from 'react-dom';
import Examples from './components/Examples';
import Examples02 from './components/Examples02';
import App from './components/App';
import Todos from './components/Todos';
import Youtube from './components/Youtube';
import store from './redux/store/index';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Examples}/>
                <Route path="ex02" component={Examples02}/>
                <Route path="ex02/:name" component={Examples02}/>
                <Route path="todos" component={Todos}/>
                <Route path="youtube" component={Youtube}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);