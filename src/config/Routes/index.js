import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register } from "../../pages";
import CreateBlog from "../../pages/CreateBlog";
import DetailBlog from "../../pages/DetailBlog";
import RootLayout from "./../../layouts/RootLayout";
import Home from "./../../pages/Home/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* As Main App */}
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/create-blog/:id?" element={<CreateBlog />} />
          <Route path="/detail-blog/:id" element={<DetailBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
