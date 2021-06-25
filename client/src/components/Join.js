import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import queryString from "query-string";
let socket;
function Join() {
  const [name, setName] = useState("hu");
  const [room, setRoom] = useState("ll");
  useEffect(() => {
    socket = io("http://localhost:4000");
    console.log(socket);
    socket.emit("join", { name, room });

    // socket.emit("disconnect");
    // socket.off()
  }, [name, room]);
  return <div>Join</div>;
}

export default Join;
