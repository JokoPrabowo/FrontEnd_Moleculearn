import {
    SIGNIN,
    SIGNUP,
    UPDATE_DATA,
    UPDATE_LEVEL,
    AUTH_ERROR,
    CLEAR,
    LOGOUT,
} from "../actions/types";

const initialState = {
    isAuthenticated: !!localStorage.getItem("token"),
    token: localStorage.getItem("token"),
    user: null,
    status: null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            localStorage.setItem("token", action.token);            
            localStorage.setItem("user", JSON.stringify(action.user));
            return {
            ...state,
            isAuthenticated: true,
            token: action.token,
            user: action.user,
            };
        case SIGNUP:
            return {
            ...state,
            status: action.status,
            };
        case UPDATE_DATA:
            localStorage.setItem("user", JSON.stringify(action.user));
            return {
            ...state,
            user: action.user,
            status: action.status,
            };
        case UPDATE_LEVEL:
            localStorage.setItem("user", JSON.stringify(action.user));
            return {
            ...state,
            user: action.user,
            status: action.status,
            error: null,
            };
        case AUTH_ERROR:
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return {
            ...state,
            isAuthenticated: false,
            token: null,
            error: action.payload,
            status: null,
            };
        case LOGOUT:
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
                error: null,
                status: null,
            };
        case CLEAR:
            return {
                ...state,
                status: null,
                error: null,
            };
        default:
            return state;
    }
};
  
export default authReducer;
  