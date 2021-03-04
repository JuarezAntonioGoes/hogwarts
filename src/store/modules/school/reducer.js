import houses from "../../../json/houses.json";

const HouseScoreReduce = (state = houses, action) => {
  switch (action.type) {
    case "ADD_POINTS":
      const { house, score } = action.house;
      console.log(house, score);

      return state.map((stateHouse) => {
        if (house === stateHouse.house) {
          return { ...stateHouse, score: stateHouse.score + Number(score) };
        }

        return stateHouse;
      });

    default:
      return state;
  }
};

export default HouseScoreReduce;
