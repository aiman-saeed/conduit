import { SET_CURRENT_COMMENTS } from "./../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_COMMENTS:
      return action.payload;

    default:
      return state;
  }
}
