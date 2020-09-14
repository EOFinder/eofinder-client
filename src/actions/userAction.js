import axios from 'axios';
import setAuthToken from "../helpers/setAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (user, history) => async dispatch => {
    dispatch({
        type: "USER_REGISTER_LOADING",
        payload: true
    });
    axios
    .post('http://localhost:4444/api/users/register', user)
    .then(result => {
        if(result.status === 200){
            history.push('/login');
            dispatch({
                type: "USER_REGISTER_SUCCESS",
                payload: false
            })
        }
    })
    .catch(err => {
        console.log(err);
        dispatch({
            type: "GET_ERRORS",
            payload: err
        });
        dispatch({
            type: "USER_REGISTER_FAILED",
            payload: false
        })
    })
}

export const loginUser = (user) => async dispatch => {
    dispatch({ type:" USER_LOGIN_LOADING", payload: true });
  
    axios
      .post("http://localhost:4444/api/users/login", user)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setLogin(decoded));
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: false})
        window.location.replace('/')
      })
      .catch(err => {
        dispatch({
          type: "GET_ERRORS",
          payload: err
        });
        dispatch({ type: "USER_LOGIN_FAILED", payload: false})
  
      });
  };
  
  export const setLogin = decoded => {
    return {
      type: "USER_LOGIN",
      payload: decoded
    };
  };
  
  export const logoutUser = history => dispatch => {
    localStorage.removeItem("token");
    setAuthToken(false);
    dispatch(setLogin({}));
    history.push("/");
  };
  