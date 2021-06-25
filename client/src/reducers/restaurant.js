const restaurantReducer = (state = [], action) => {
  switch (action.type) {
    case "GET RESTAURANT":
      return action.payload;
    default:
      return state;
  }
};
export default restaurantReducer;
