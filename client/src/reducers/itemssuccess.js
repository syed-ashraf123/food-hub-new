const itemssuccessReducer = (state = false, action) => {
  console.log("Came into Reducer itmesfetchedsuccess");

  switch (action.type) {
    case "GET RESULT":
      return state;
    case "SUCCESS":
      return !state;
    default:
      return state;
  }
};
export default itemssuccessReducer;
