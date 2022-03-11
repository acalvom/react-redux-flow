// This is the file where the store is created.
// The parameters are the reducers and a default inital state (empty)

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/rootReducers';
import thunk from 'redux-thunk';

// Thunk is a miidleware which allows redux dealing with async functions
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);