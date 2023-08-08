import { GET_COMPOUND, COMPOUND_ERROR } from "../actions/types";

const initialState = {
    compound: null,
    status: [],
    error: null,
};

const compoundReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPOUND:
            return {
                ...state,
                compound: action.compound,
                status: action.status,
            };
        case COMPOUND_ERROR:
            return {
                ...state,
                error: action.payload,
                status: "FAIL",
            };
        default:
            return state;
    }
};

export default compoundReducer;