import isEmpty from '../helpers/validation';

const initialState = {
    isAuthenticated: false,
    isRegis: false,
    users: {}
}

const userReducers = (state = initialState, action) => {
    if(action.type === "USER_LOGIN"){
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            users: action.payload 
        }
    } else if(action.type === "USER_LOGIN_LOADING"){
        return {
            ...state,
            isRegis: action.payload
        }
    } else if(action.type === "USER_LOGIN_SUCCESS"){
        return {
            ...state,
            isRegis: action.payload
        }
    } else if(action.type === "USER_LOGIN_FAILED"){
        return {
            ...state,
            isRegis: action.payload
        }
    } else if(action.type === "USER_REGISTER_LOADING"){
        return {
            ...state,
            isRegis: action.payload
        }
    } else if(action.type === "USER_REGISTER_SUCCESS"){
        return {
            ...state,
            isRegis: action.payload
        }
    } else if(action.type === "USER_REGISTER_FAILED"){
        return {
            ...state,
            isRegis: action.payload
        }
    }
    return state;
}

export default userReducers;