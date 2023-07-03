import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";

const RouteSwitch = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/ShopPage" element={<ShopPage stateItemsChanger = {props.stateItemsChanger} stateCostChanger = {props.stateCostChanger} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;