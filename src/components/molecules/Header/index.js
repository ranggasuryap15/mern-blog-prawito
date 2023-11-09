import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <p className="logo-app">MERN-Blog</p>
      <p className="menut-item" onClick={() => navigate("/login")}>
        Logout
      </p>
    </div>
  );
};

export default Header;
