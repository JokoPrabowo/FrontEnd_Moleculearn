import { GET_QUESTION, QUESTION_ERROR } from "./types";

export const getQuestion = () => async (dispatch) => {
    try {
        const res = await fetch(`https://back-end-kimia.vercel.app/api/v1/question`);
        const data = await res.json();
        dispatch({
            type: GET_QUESTION,
            questions: data,
            status: "OK",
        });
    } catch (err) {
        dispatch({
            type: QUESTION_ERROR,
            payload: err.response.data.msg,
        });
    }
};