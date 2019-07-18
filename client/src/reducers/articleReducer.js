import { SET_CURRENT_ARTICLE } from "./../actions/types";

const initialState = {
  data: {},
  user: {},
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ARTICLE:
      return {
        ...action.payload,
        loading: false
      };

    default:
      return state;
  }
}
