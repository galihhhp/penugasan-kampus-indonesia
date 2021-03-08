import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "state/types";

export const login = (payload) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    dispatch({ type: LOGIN_SUCCESS, payload });
    alert("successfully added to cart");
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error });
  }
};
