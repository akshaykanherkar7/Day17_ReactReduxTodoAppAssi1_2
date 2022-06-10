import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN__LOADING,
  LOGOUT,
} from "./auth.types";

export const login = (data) => (dispatch) => {
  dispatch({ type: LOGIN__LOADING });
  axios
    .post("https://reqres.in/api/login", data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const logout = () => ({ type: LOGOUT });
