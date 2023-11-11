import { combineReducers } from "redux";
import GlobalReducer from "./globalReducer";
import HomeReducer from "./homeReducer";

const reducer = combineReducers({
  HomeReducer,
  GlobalReducer,
});

export default reducer;
