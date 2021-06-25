import Axios from "axios";
// export const increment = (nr) => {
//   return {
//     type: "INCREMENT",
//     payload: nr,
//   };
// };

// export const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// export const get_posts = () => {
//   return {
//     type: "get_posts",
//     payload: "jyf",
//   };
// };

// export const get_posts = () => {
//   return async function (dispatch) {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//     console.log(res.data[0].id);
//     dispatch({
//       type: "get_posts",
//       payload: [res.data[0].id],
//     });
//   };
// };

// Axios.get("http://localhost:4000/", config)
//   .then((response) => {
//     console.log(response);
//     console.log(response.data.msg);
//     setSuccess(true);
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log(error.response.data.msg);
//     setStatus(error.response.data.msg);

//     window.scrollTo(0, 0);
//   });

export const get_restaurant = (area) => {
  return async function (dispatch) {
    const res = await Axios.get("http://localhost:4000" + `?area=${area}`);
    dispatch({
      type: "GET RESTAURANT",
      payload: await res.data,
    });
  };
};

export const islogged = () => {
  return {
    type: "LOGGED",
  };
};

export const itemsfetch = (token) => {
  console.log("Inside fetch statehhhhhhhhhhh");
  return async function (dispatch) {
    const res = await Axios.get("http://localhost:4000/items", {
      headers: {
        "seller-auth-token": token,
      },
    });
    dispatch({
      type: "GET ITEMS",
      payload: await res.data.data,
    });
  };
};

export const itemsfetched = () => {
  return {
    type: "GET RESULT",
  };
};

export const itemsfetchedsuccess = () => {
  return {
    type: "SUCCESS",
  };
};

export const addtocart = (itemss) => {
  console.log("CAme in cart action");
  return {
    type: "ADD TO CART",
    payload: itemss,
  };
};

export const removefromcart = (name) => {
  return {
    type: "REMOVE FROM CART",
    payload: name,
  };
};

export const clearcart = () => {
  return {
    type: "CLEAR CART",
  };
};
