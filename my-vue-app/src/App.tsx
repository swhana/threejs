import { useState } from "react";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ThreeBase from "./ThreeBase";
import Line from "./Line";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ThreeBase />} />
        <Route path={"/line"} element={<Line />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
