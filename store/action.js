import { SAVE, REMOVE } from "./actionTypes";

export const save = (token, userInfo) => ({
  type: SAVE,
  payload: token,
  response: userInfo
});

export const remove = () => ({
  type: REMOVE,
});
