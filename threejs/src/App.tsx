import { useState } from "react";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ThreeBase from "./ThreeBase";
import Line from "./Line";
import ImportModel from "./ImportModel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ThreeBase />} />
        <Route path={"/line"} element={<Line />} />
        <Route path={"/model"} element={<ImportModel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
