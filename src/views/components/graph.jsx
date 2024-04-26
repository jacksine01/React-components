import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:8001";

export function Graph() {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const socket = io(ENDPOINT);

    socket.on("subscribeToRandomNumbers", (value) => {
      console.log(value);
      setRandomNumber(value);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>{<p>Random Number: {randomNumber}</p>}</div>;
}
