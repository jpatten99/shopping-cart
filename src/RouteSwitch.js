import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/ShopPage" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;