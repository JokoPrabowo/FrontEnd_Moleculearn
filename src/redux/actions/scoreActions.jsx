import { SAVE_SCORE, SCORE_ERROR} from "./types"

export const saveScore = (data) => async (dispatch) => {
    try {
        const response = await fetch("https://back-end-kimia.vercel.app/api/v1/score", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        dispatch({
            type: SAVE_SCORE,
            status: result.status,
        });
    } catch (error) {
        dispatch({
            type: SCORE_ERROR,
            payload: error.response,
        });
    }
};