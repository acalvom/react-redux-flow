// This is the file where the store is created.
// The parameters are the reducers and a default inital state (empty)

import { createStore } from 'redux';
import reducers from './reducers/rootReducers';

const store = createStore(
    reducers,
    {}
);

export default store;