import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN__LOADING,
  LOGOUT,
} from "./auth.types";

let token = localStorage.getItem("token");
const initialState = {
  loading: false,
  error: false,
  isAuth: !!token,
  token: token,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN__LOADING: {
      return { ...state, loading: true, error: false };
    }

    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
      };
    }

    case LOGIN_ERROR: {
      return { ...state, loading: false, error: true, isAuth: false };
    }

    case LOGOUT: {
      localStorage.removeItem("token");
      return { ...state, isAuth: false, token: "" };
    }
    default: {
      return state;
    }
  }
};
