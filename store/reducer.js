import { SAVE, REMOVE } from "./actionTypes";

const initialState = {
  token: "",
  userInfo: {},
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return { ...state, token: action.payload, userInfo: action.response };

    case REMOVE:
      return { ...state, token: "", userInfo: {} };
    default:
      return state;
  }
};
