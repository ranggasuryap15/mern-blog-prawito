import { combineReducers } from "redux";
import createBlogReducer from "./createBlogReducer";
import GlobalReducer from "./globalReducer";
import HomeReducer from "./homeReducer";

const reducer = combineReducers({
  HomeReducer,
  GlobalReducer,
  createBlogReducer,
});

export default reducer;
