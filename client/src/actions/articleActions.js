import { GET_ERRORS, SET_CURRENT_ARTICLE } from "./types";
import { VIEWARTICLE_URL } from "./../routes/index";
import axios from "axios";

// Add Article
export const addArticle = (userData, history) => dispatch => {
  axios
    .post("/api/articles/add", userData)
    .then(res => {
      // Redirect to the new article
      history.push(VIEWARTICLE_URL + "/" + res.data._id);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Article
export const getArticle = id => dispatch => {
  axios
    .get(`/api/articles/${id}`)
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
