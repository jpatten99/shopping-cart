import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";

const RouteSwitch = (props) => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Homepage" element={<HomePage/>} />
        <Route path="/ShopPage" element={<ShopPage stateItemsChanger = {props.stateItemsChanger} stateCostChanger = {props.stateCostChanger} />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;