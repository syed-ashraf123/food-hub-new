import React from "react";
import Axios from "axios";

function LoggenInTry() {
  try {
    const config = {
      headers: { "auth-token": localStorage.getItem("auth-token") },
    };
    Axios.get("http://localhost:5000/api/posts", config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  } catch (error) {
    console.log(error);
  }

  return <div>Phewww</div>;
}

export default LoggenInTry;
