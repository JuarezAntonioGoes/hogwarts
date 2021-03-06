import { addPoints, removePoints } from "./action";

export const addScore = (infoStudent, score) => (dispatch, getState) => {
  const { HouseScoreReduce } = getState();
  const house = infoStudent.house.toLocaleLowerCase();

  const scoreAdd = HouseScoreReduce.map((stateHouse) => {
    if (house === stateHouse.house) {
      return { ...stateHouse, score: stateHouse.score + Number(score) };
    }

    return stateHouse;
  });

  dispatch(addPoints(scoreAdd));
};

export const removeScore = (infoStudent, score) => (dispatch, getState) => {
  const { HouseScoreReduce } = getState();
  const house = infoStudent.house.toLocaleLowerCase();

  const scoreAdd = HouseScoreReduce.map((stateHouse) => {
    if (house === stateHouse.house) {
      return { ...stateHouse, score: stateHouse.score - Number(score) };
    }

    return stateHouse;
  });

  dispatch(removePoints(scoreAdd));
};
