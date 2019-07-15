import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";

export const updateUser = (
  userData,
  history,
  redirectURL,
  session
) => dispatch => {
  axios
    .post("/api/users/update", userData)
    .then(res => {
      const { _id: id, name, avatar, email } = res.data;
      const { iat, exp } = session;
      dispatch(
        setCurrentUser({
          id,
          name,
          avatar,
          email,
          iat,
          exp
        })
      );
      history.push(redirectURL);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set updated as logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
