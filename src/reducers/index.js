import { combineReducers } from 'redux';
import errorReducer from './ErrorReducer';
import userReducers from './userReducers';

const rootReducers = combineReducers({
    error: errorReducer,
    user: userReducers
})

export default rootReducers;