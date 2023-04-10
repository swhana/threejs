import { useState } from "react";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ThreeBase from "./ThreeBase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ThreeBase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
