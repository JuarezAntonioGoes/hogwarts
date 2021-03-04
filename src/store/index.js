import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import HouseScoreReduce from "./modules/school/reducer";

import thunk from "redux-thunk";

const reducers = combineReducers({
  HouseScoreReduce,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
