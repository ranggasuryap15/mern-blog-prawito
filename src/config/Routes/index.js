import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Login, Register } from "../../pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
