import { GET_ERRORS, SET_CURRENT_ARTICLE } from "./types";
import axios from "axios";

// Add Article
export const addArticle = userData => dispatch => {
  axios
    .post("/api/articles/add", userData)
    .then(res => {
      dispatch({
        type: SET_CURRENT_ARTICLE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
