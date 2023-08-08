import { SAVE_SCORE, SCORE_ERROR } from "../actions/types";

const initialState = {
    status: [],
    error: null,
};

const scoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SCORE:
            return {
                ...state,
                status: action.status,
            };
        case SCORE_ERROR:
            return {
                ...state,
                error: action.payload,
                status: "FAIL",
            };
        default:
            return state;
    }
};

export default scoreReducer;
