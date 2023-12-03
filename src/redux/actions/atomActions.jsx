import { GET_ATOM, ATOM_ERROR } from "./types";

export const getAtom = () => async (dispatch) => {
    try{
        const res = await fetch(`https://back-end-kimia.vercel.app/api/v1/atom`);
        const response = await res.json();
        dispatch({
            type: GET_ATOM,
            atom: response.data,
            status: "OK",
        });
    }catch(error){
        dispatch({
            type: ATOM_ERROR,
            payload: error.message,
        });
    }
}