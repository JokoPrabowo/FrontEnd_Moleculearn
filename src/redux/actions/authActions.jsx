import Swal from "sweetalert2";
import {
    SIGNIN,
    SIGNUP,
    UPDATE_DATA,
    UPDATE_LEVEL,
    AUTH_ERROR,
    CLEAR,
    LOGOUT,
} from "./types";

export const signIn = (data) => async (dispatch) => {
    try {
      const response = await fetch("https://back-end-kimia.vercel.app/api/v1/signIn", {
        method: "POST",
  
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
  
      if (response.status === 200) {
        dispatch({
          type: SIGNIN,
          token: result.token,
          user: result.user,
          status: result.status,
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Berhasil masuk!",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if(response.status === 401){
        authError(result);
        Swal.fire({
          position: "center",
          icon: "error",
          title: result.message,
          showConfirmButton: true,
          // timer: 1000,
        });
      } else if(response.status === 404){
        authError(result);
        Swal.fire({
          position: "center",
          icon: "error",
          title: result.message,
          showConfirmButton: true,
          // timer: 1000,
        });
      }
    } catch (error) {
      authError(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Gagal masuk",
        showConfirmButton: false,
        timer: 1000,
      });
    }
};

export const signUp = (data) => async (dispatch) => {
    try {
      const response = await fetch("https://back-end-kimia.vercel.app/api/v1/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.status === 422) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Harap isi semua data!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (response.status === 400){
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Nama pengguna telah digunakan!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (response.status === 201){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Pendaftaran berhasil!",
          showConfirmButton: false,
          timer: 1000,
        });
      }
      dispatch({
        type: SIGNUP,
        status: result.status,
      });
    } catch (error) {
      authError(error);
    }
  };

export const updateData = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://back-end-kimia.vercel.app/api/v1/updateData",
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const result = await response.json();
    console.log(JSON.stringify(result));
    dispatch({
      type: UPDATE_DATA,
      user: result.user,
      status: result.status,
    });
  } catch (error) {
    authError(error);
  }
};

export const updateLevel = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://back-end-kimia.vercel.app/api/v1/updateLevel",
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const result = await response.json();
    dispatch({
      type: UPDATE_LEVEL,
      user: result.user,
      status: result.status,
    });
  } catch (error) {
    authError(error);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Update Failed",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const authError = (error) => async (dispatch) => {
  dispatch({
    type: AUTH_ERROR,
    payload: error.message,
  });

  setTimeout(() => {
    dispatch({
      type: AUTH_ERROR,
      payload: null,
    });
  }, 5000);
};

export const clear = () => async (dispatch) => {
  dispatch({
    type: CLEAR,
  });
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Sampai jumpa!",
    showConfirmButton: false,
    timer: 1500,
  });
};