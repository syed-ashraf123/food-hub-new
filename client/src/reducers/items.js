const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET ITEMS":
      return action.payload;
    default:
      return state;
  }
};
export default itemsReducer;
