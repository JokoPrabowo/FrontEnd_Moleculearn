import { GET_ATOM, ATOM_ERROR } from "../actions/types";

const initialState = {
    atom: null,
    status: [],
    error: null,
};

const atomReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ATOM:
            return {
                ...state,
                atom: action.atom,
                status: action.status,
            };
        case ATOM_ERROR:
            return {
                ...state,
                error: action.payload,
                status: "FAIL",
            };
        default:
            return state;
    }
};

export default atomReducer;