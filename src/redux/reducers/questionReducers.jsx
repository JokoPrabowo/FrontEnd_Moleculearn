import { GET_QUESTION, QUESTION_ERROR } from "../actions/types";

const initialState = {
    questions: [],
    status: [],
    error: null,
};

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTION:
            return {
                ...state,
                questions: action.questions,
                status: action.status,
            };
        case QUESTION_ERROR:
            return {
                ...state,
                error: action.payload,
                status: "FAIL",
            };
        default:
            return state;
    }
};

export default questionReducer;
