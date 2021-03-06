import { ADD_POINTS } from "./actionType";
import { RM_POINTS } from "./actionType";

export const addPoints = (house) => ({
  type: ADD_POINTS,
  house,
});


export const removePoints = (house) => ({
  type: RM_POINTS,
  house,
});
