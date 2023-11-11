import { legacy_createStore as createStore } from "redux";

const initialState = {
  dataBlog: [],
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
