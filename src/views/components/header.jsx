import { socket } from "@/socket";
import React, { useState } from "react";
import ".././index.css";

export function Header() {
  const [userData, setUserData] = useState(null);

  socket.on("update_user", function (data) {
    getUser();
  });

  const API_BASE = "http://localhost:5173/";

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: API_BASE + "/user",
    }).then((res) => {
      setUserData(res.data);
    });
  };
  return (
    <nav className="navbar">
      <div className="container">
        <span className="logo">Crash Gambling</span>
        <ul className="nav">
          {userData && userData !== "No User Authentication" ? (
            <>
              <li>User: {userData.username}</li>
              <li>Balance: {userData.balance.toFixed(2)}</li>
              <li>
                <a href="#" onClick={logout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setOpenModalLogin(true);
                    setAuthResponseMessage("");
                  }}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setOpenModalRegister(true);
                    setAuthResponseMessage("");
                  }}
                >
                  Register
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
