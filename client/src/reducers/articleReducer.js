import { SET_CURRENT_ARTICLE } from "./../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ARTICLE:
      return {
        ...action.payload
      };

    default:
      return state;
  }
}
