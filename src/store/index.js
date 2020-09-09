import {createStore} from 'redux';

import {getAllUsers} from '../reducers/userReducers'

const store = createStore(getAllUsers)

export default store;