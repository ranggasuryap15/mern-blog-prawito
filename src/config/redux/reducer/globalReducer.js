const initialState = {
  name: "Generus Koding",
};

// global reducer
const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Generus Koding 2",
    };
  }
  return state;
};

export default globalReducer;
