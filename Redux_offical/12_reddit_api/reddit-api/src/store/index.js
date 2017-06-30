import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger();

// const configureStore = preloadedState => {
//     return createStore(
//         rootReducer,
//         preloadedState,
//         applyMiddleware(
//             thunk,
//             loggerMiddleware
//         )
//     )
// }

const middlewareArr = [];
middlewareArr.push(thunk);
middlewareArr.push(loggerMiddleware);

const configureStore = createStore(
    rootReducer,
    applyMiddleware(...middlewareArr)
);

export default configureStore;