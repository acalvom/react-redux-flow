// With multiple reducers a file to combine all reducers is necessary

import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

const reducers = combineReducers({
    account: accountReducer
});

export default reducers;