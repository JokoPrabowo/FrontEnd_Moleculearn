import { GET_COMPOUND, COMPOUND_ERROR } from "./types";

export const getCompound = () => async (dispatch) => {
    try{
        const res = await fetch(`https://back-end-kimia.vercel.app/api/v1/compound`);
        const response = await res.json();
        dispatch({
            type: GET_COMPOUND,
            compound: response.data,
            status: "OK",
        });
    }catch(error){
        dispatch({
            type: COMPOUND_ERROR,
            payload: error.message,
        });
    }
}