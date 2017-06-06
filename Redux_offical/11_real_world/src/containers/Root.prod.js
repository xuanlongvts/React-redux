import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';

import App from './App';
import UserPage from './UserPage';
import RepoPage from './RepoPage';

const Root = ({store, history}) => (
	<Provider store={store}>
		{ /* ConnectedRouter will use the store from Provider automatically */ }
		<ConnectedRouter history={history}>
			<div>
				<Switch>
					<Route exact path="/" component={App}/>
					<Route path="/about" component={UserPage}/>
					<Route path="/topics" component={RepoPage}/>
				</Switch>
			</div>
		</ConnectedRouter>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
}

export default Root;