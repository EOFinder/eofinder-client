const { act } = require("react-dom/test-utils")

const users = []

export const getAllUsers = (state = users, action) => {
    if(action.type === "GET_ALL_USERS"){
        return action.users
    }
    return state
}