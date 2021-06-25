import React from "react";
import { Redirect } from "react-router-dom";
function Logout() {
  localStorage.removeItem("user-auth-token");

  return (
    <div>
      <Redirect to="/" />
    </div>
  );
}

export default Logout;
