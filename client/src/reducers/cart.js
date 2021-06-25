const cartReducer = (state = [], action) => {
  console.log("In CArt Reducer ", action.payload, " ", state);
  switch (action.type) {
    case "ADD TO CART":
      return [...state, action.payload];
    case "REMOVE FROM CART":
      return [
        ...state.filter((obj) => {
          return obj.name != action.payload;
        }),
      ];
    case "CLEAR CART":
      return (state = []);
    default:
      return state;
  }
};
export default cartReducer;
