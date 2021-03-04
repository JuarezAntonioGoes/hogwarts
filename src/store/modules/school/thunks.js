import { addPoints } from "./action";

export const addScore = (infoStudent, score) => (dispatch) => {
  const house = infoStudent.house.toLocaleLowerCase();
  dispatch(addPoints({ house, score }));
};
