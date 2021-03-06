import houses from "../../../json/houses.json";

const HouseScoreReduce = (state = houses, action) => {
  switch (action.type) {
    case "ADD_POINTS":
      return action.house;

    case "RM_POINTS":
      return action.house;

    default:
      return state;
  }
};

export default HouseScoreReduce;
