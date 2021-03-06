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
        if(res.status === 200){
          const userData = {
              _id: res.data.user._id,
              email: res.data.user.email,
              fullname: res.data.user.fullname,
              token: res.data.token
          }
          localStorage.setItem("token", JSON.stringify(userData));
          setAuthToken(userData.token);
          const decoded = jwt_decode(userData.token);
          console.log(decoded);
          dispatch(setLogin(decoded));
          dispatch({ type: "USER_LOGIN_SUCCESS", payload: true})

          alert('login berhasil')
        } else if(res.status === 202){
          alert('password salah')
        }
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
  