import { ADD_POINTS } from "./actionType";

export const addPoints = (house) => ({
  type: ADD_POINTS,
  house,
});
