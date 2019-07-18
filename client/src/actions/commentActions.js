import { GET_ERRORS } from "./types";
import axios from "axios";

// Add Comment
export const addComment = (article_id, comment) => dispatch => {
  axios.post("/api/comments/add/" + article_id, comment).catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
};
